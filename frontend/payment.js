import { api, requireAuth, toastError, toastSuccess } from "./common.js";

const user = requireAuth("USER");

const params = new URLSearchParams(window.location.search);
const orderId = params.get("orderId");
const amount = params.get("amount");

if (!orderId || !amount) {
    window.location.href = "/frontend/dashboard-user.html";
}

document.getElementById("order-id-label").textContent = `Order #${orderId}`;
document.getElementById("amount-label").textContent = `LKR ${Number(amount).toLocaleString("en-LK")}`;

const methodBtns = document.querySelectorAll(".method-btn");
const paymentForm = document.getElementById("payment-form");
const ccInputs = paymentForm.querySelectorAll("input");
let selectedMethod = "CREDIT_CARD";

methodBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        methodBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedMethod = btn.dataset.method;

        if (selectedMethod === "CASH") {
            ccInputs.forEach(input => {
                input.disabled = true;
                input.required = false;
            });
            document.getElementById("pay-btn").textContent = "Confirm Cash Payment";
        } else {
            ccInputs.forEach(input => {
                input.disabled = false;
                input.required = true;
            });
            document.getElementById("pay-btn").textContent = "Complete Payment";
        }
    });
});

paymentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const payBtn = document.getElementById("pay-btn");
    payBtn.disabled = true;
    payBtn.textContent = "Processing...";

    const payload = {
        orderId: parseInt(orderId, 10),
        amount: parseFloat(amount),
        method: selectedMethod,
        status: "COMPLETED", // Assuming payment is processed
        paidAt: new Date().toISOString()
    };

    try {
        await api.post("/api/payments", payload);
        toastSuccess("Payment successful! Redirecting...");
        setTimeout(() => {
            window.location.href = "/frontend/dashboard-user.html";
        }, 1500);
    } catch (error) {
        toastError(error.message);
        payBtn.disabled = false;
        payBtn.textContent = selectedMethod === "CASH" ? "Confirm Cash Payment" : "Complete Payment";
    }
});
