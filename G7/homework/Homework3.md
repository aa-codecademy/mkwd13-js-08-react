# React Homework: "My Awesome Webstore Admin Dashboard"

This is your most ambitious React homework yet! You'll be building an admin dashboard for a webstore, leveraging everything you've learned so far: components, state, effects, routing, global state management, robust form handling, and making HTTP requests to the [Fake Store API](https://fakestoreapi.com/).

Instead of a buying experience, we're focusing on the **management** side: creating, viewing, updating, and deleting products.

## 🚀 Getting Started

1.  **Create a New Project:** Inside your existing `react-homeworks` repository, create a new React project using Vite.
2.  **Install Dependencies:** You'll need `react-router-dom`, `axios`, and `react-hook-form`.
    ```bash
    npm install react-router-dom axios react-hook-form
    ```
3.  **Start Coding!** Open the `my-admin-dashboard-app` folder in your code editor and begin working on the requirements below.

## ✨ Project: My Awesome Webstore Admin Dashboard

You're going to build a simple admin interface to manage products using the Fake Store API.

**Fake Store API Base URL:** `https://fakestoreapi.com`

**Important Note for Fake Store API:** The Fake Store API is a _mock_ API. While it supports POST, PUT, and DELETE requests, the changes you make (creating, updating, deleting products) are **not persistent**. They will only exist for the duration of your browser session or until the mock server resets. This is perfectly fine for learning and testing!

### Basic Requirements (Level 1)

Your app should meet the following basic criteria:

1.  **Application Routing:**

    - **Dashboard Home (`/`):** Displays a list of all products. Include a way to add new products.
    - **Product Detail View (`/products/:id`):** Displays detailed information about a single product. Include options to edit or delete.
    - **Product Creation Form (`/products/new`):** A form for adding new products.
    - **Product Editing Form (`/products/edit/:id`):** A form for modifying existing products.
    - **Navigation:** Provide clear navigation within the application.

2.  **Product Data Management (CRUD Operations):**

    - **Retrieve All Products:** On the Dashboard Home page, display all products by fetching them from the Fake Store API. Handle loading and potential errors.
    - **Retrieve Single Product:** On the Product Detail View and Product Editing Form pages, load the specific product's data based on its ID.
    - **Create Product:** Implement the ability to add a new product using a form. After successful creation, the new product should appear in the product list.
    - **Manage Product State:** Ensure the product data across your application (list, detail views) remains synchronized after create, update, or delete actions, reflecting the current state in your application.

3.  **Dashboard Home Page (`/`):**

    - Display products clearly (e.g., in a table or grid) showing key information like title, price, and category.
    - Each product should link to its respective Product Detail View.
    - Provide a button or link to navigate to the Product Creation Form.

4.  **Product Detail View (`/products/:id`):**

    - Present all available information for the selected product.
    - Include controls to navigate to the product's editing form and a control for deleting the product.

5.  **Product Forms:**

    - For both creating and editing products, build robust forms with fields for at least: `title`, `price`, `description`, `category`, and `image` (URL).
    - The editing form should pre-populate with the existing product's data.
    - After submission, redirect the user appropriately (e.g., back to the product list or detail view).

6.  **Basic Styling:**
    - Apply fundamental CSS to ensure the dashboard is usable and organized.

### Bonus Requirements (Level 2 - Optional, but highly encouraged!)

If you've completed the basic requirements and feel comfortable, try to implement these additional features:

1.  **Update Product:** Implement the functionality for the Product Editing Form to send updated product data to the API and reflect the changes in the application.
2.  **Delete Product:** Implement the delete functionality.
3.  **Form Validation:** Add client-side validation for all form fields (e.g., required fields, price as a positive number) and display appropriate error messages.
4.  **Loading & Error UI:** Implement visual indicators (spinners, messages) for loading states during API calls and for any errors that occur.
5.  **Product Search/Filter:** On the Dashboard Home page, add a search input to search for products by title, and select with options to filter by category. The search and filtering functionalities should utilize URL query parameters.

## 📦 Submission

Once you're finished (or when the deadline approaches):

1.  **Commit Your Changes:** Make sure all your code changes are committed to your `my-admin-dashboard-app` project within your `react-homeworks-[YourName]` repository.
2.  **Push to GitHub:** Push your changes to your GitHub repository.
3.  **Share the Link:** Send the link to your _private_ `react-homeworks` repository to the trainer and assistant via email. You can find their email addresses in the shared classroom repository documentation.

This project is a fantastic way to solidify your understanding of modern React development. Break it down into manageable tasks, work incrementally, and utilize all the tools you've learned. Good luck, and happy coding!
