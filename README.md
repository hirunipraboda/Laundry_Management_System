# SmartFold — Laundry Management System

SmartFold is a comprehensive, full-stack laundry operations management system designed for both administrative efficiency and a premium customer service experience.

## Features

### For Customers
- **Intuitive Order Placement**: Simplified service selection with real-time price estimation.
- **Service Catalog**: Browse Laundry, Dry Cleaning, Pressing, and Premium Care options.
- **Secure Payment Portal**: Redirected to a payment gateway supporting Credit Card and Cash on Pickup.
- **Order Tracking**: Monitor pending and past orders from the user dashboard.
- **Messaging**: Direct communication channel with laundry staff.

### For Administrators
- **Operations Dashboard**: At-a-glance view of today's orders, revenue, and pending tasks.
- **Order Management**: Update statuses (Pending, In Progress, Ready) and manage pickup schedules.
- **Service Catalog Management**: Dynamically manage available services and pricing.
- **Customer Inbox**: Centralized messaging hub to respond to customer inquiries in real-time.
- **User Management**: Overview of all registered customers and staff members.
- **Payment Info**: Dedicated section to track and monitor all settlements.

## Tech Stack

- **Backend**: Java 17, Spring Boot 3, Spring Data JPA, Spring Security
- **Frontend**: Vanilla HTML5, CSS3 (Custom Design System), JavaScript (ES6 Modules)
- **Database**: H2 (In-Memory for development) / MySQL support ready
- **Communication**: REST API architecture

## Getting Started

### Prerequisites
- Java 17 or higher
- Maven
- Node.js (for serving the frontend)

### Installation and Setup

1. Clone the repository:
   git clone https://github.com/hirunipraboda/Laundry_Management_System.git
   cd Laundry_Management_System

2. Start the backend:
   mvn spring-boot:run
   The API will be available at http://localhost:8080

3. Serve the frontend:
   npx http-server . -p 3000 -c-1
   Open your browser at http://localhost:3000/frontend/login.html

### Default Credentials
- Admin: admin@smartfold.lk / 1234
- Customer: nimali@smartfold.lk / 1234

## Security
The application uses Spring Security with role-based access control (RBAC), ensuring only admins access the management console while customers see only their own data.

---
Built for advanced laundry operations.
