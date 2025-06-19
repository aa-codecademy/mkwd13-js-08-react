# React E-Commerce Application - Homework Assignment

## Overview
Create a React application that demonstrates your understanding of routing, context API, and API calls using the FakeStore API. You'll build a simple e-commerce product browser with category filtering functionality.

## Requirements

### 1. Technical Stack
- React with functional components and hooks
- React Router for navigation
- Context API for state management (if needed)
- API calls using either `fetch` or `axios`
- CSS for styling (your choice)

### 2. API Endpoints
You will work with the following FakeStore API endpoints:
- **All Products**: `https://fakestoreapi.com/products`
- **Categories**: `https://fakestoreapi.com/products/categories`
- **Products by Category**: `https://fakestoreapi.com/products/category/{categoryName}`
  - Example: `https://fakestoreapi.com/products/category/electronics`

### 3. Pages and Components

#### Home Page (`/`)
- Fetch and display category buttons dynamically from `https://fakestoreapi.com/products/categories` (meaning for each category fetched, each value in the response, add a button containing the category name).
- Each category button should display the products of that specific category directly on the home page, meaning:
 - When a button is clicked you should fetch the products of that category, for example if the button `electronics` is clicked, you should fetch the products of that category using the url:`https://fakestoreapi.com/products/category/{categoryName}` and display them in the home page.
- Include a welcome message and brief description of the store
- Products should be displayed as cards below the category buttons, showing product image, title, price, and category
- Include loading states while fetching categories and products

#### Products Page (`/products`)
- Display all products from `https://fakestoreapi.com/products`
- Products should be displayed as either:
  - **Cards** (recommended): showing product image, title, price, and category
  - **Table**: with columns for image, title, price, category, and description
- Include a loading state while fetching data
- Handle error states gracefully

### 4. Routing Structure
```
/ (Home - displays category buttons and filtered products)
/products (All products page)
```

### 5. Functional Requirements
- **Navigation**: Smooth navigation between Home and Products pages
- **Category Filtering**: Clicking category buttons should show products of that category accordingly
- **Loading States**: Show loading indicators while fetching data
- **Error Handling**: Display appropriate error messages if API calls fail


## Submission Guidelines

### File Structure Example
```
src/
├── components/
│   ├── ProductCard.jsx (or ProductTable.jsx)
│   ├── LoadingSpinner.jsx
│   └── ErrorMessage.jsx
├── pages/
│   ├── Home.jsx
│   └── Products.jsx
├── context/
│   └── ProductContext.jsx (if using Context)
├── services/
│   └── api.js
├── App.jsx
└── index.js
```

## Getting Started (Proposal, non mendatory)
1. Create a new React application using `vite`
2. Install necessary dependencies (`react-router-dom`, `axios` if chosen)
3. Set up your folder structure
4. Start with the API service layer
5. Build the Home page first, then the Products page
6. Implement routing and category filtering
7. Add styling and polish the UI
