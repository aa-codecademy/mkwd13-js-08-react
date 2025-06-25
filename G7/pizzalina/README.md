# Pizzalina app

This is a Full Stack app that allows users to order pizzas from a pizzeria.

## Tech Stack

- Frontend: React
- Backend: Nest JS
- Database: PostgreSQL
- UI Library: Tailwind CSS

## How to run the project

### Database

1. Open PG Admin
2. In your running server, create a new database called `pizza`

### Backend

1. Open `server` folder in terminal
2. Run `npm install` to install the dependencies
3. Create a `.env` file in the `server` root folder and add all listed variables from the `.env.example` file
4. Run `npm run start` to start the server locally
5. Server will be running on `http://localhost:3000`
6. Swagger documentation will be available on `http://localhost:3000/api`

### Frontend

1. Run `npm install` to install the dependencies
2. Run `npm run dev` to start the development server
3. Server will be running on `http://localhost:5173`

## Populate the database

1. Once the server is running, you can populate the database by calling the following admin endpoints:

- `POST /admin/pizzas/backfill` - This will backfill the pizzas table with predefined pizza data
- `POST /admin/orders/backfill` - This will backfill the orders table with random orders
