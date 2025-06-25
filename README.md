# multi-tenant-node-api

# Multi-Tenant Node.js API

A scalable Node.js backend that supports **multi-tenant architecture**, where each client has a separate MySQL database. Includes Redis caching, JWT authentication, and dynamic DB routing based on client identity.

## 🔧 Tech Stack

- Node.js (Express)
- Sequelize (MySQL ORM)
- Redis (session/token cache)
- JWT (auth)
- Docker + Docker Compose

## 📁 Clients Supported

| Client Name   | Database Name         |
|---------------|------------------------|
| freshbite     | freshbite_db           |
| mealkart      | mealkart_orders_db     |
| tastytiffin   | tastytiffin_data      

## 🚀 Features

- Dynamic DB selection based on `x-client-id` header
- JWT-based login API
- Extensible to more clients

## 📦 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/multi-tenant-node-api.git
cd multi-tenant-node-api

# Setup environment variables
cp .env.example .env

# Run Server
npm run dev



🧪 Sample API Request
http
Copy
Edit
POST /login
Headers:
  x-client-id: freshbite
Body:
  {
    "email": "user@example.com",
    "password": "test123"
  }
