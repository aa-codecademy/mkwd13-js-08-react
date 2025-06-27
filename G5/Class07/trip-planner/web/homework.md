# React E-Commerce Application - Class 7 Homework
## Adding Product Creation Feature

## Overview
Extend your existing e-commerce application from Class 5 homework by implementing a product creation feature. This assignment focuses on form handling, API integration, and state management using React Hook Form.

## Prerequisites
- Completed Class 5 homework (React E-Commerce Application with product browsing and category filtering)
- Understanding of React Router, Context API, and API calls

## Requirements

### 1. New Route Implementation
- **Route**: `/add-product`
- **Navigation**: Add a new navigation link in your existing navigation menu
- **Accessibility**: Ensure the route is accessible from all pages in your application

### 2. Product Creation Form
Build a comprehensive form using **React Hook Form** with the following fields:

#### Required Form Fields:
- **Product Title** (text input)
  - Required field
  - Minimum 3 characters
- **Price** (number input)
  - Required field
  - Must be a positive number
- **Description** (textarea)
  - Required field
  - Minimum 10 characters
  - Maximum 500 characters
- **Category** (select dropdown)
  - Required field
  - Populate dynamically from existing categories API: `https://fakestoreapi.com/products/categories` (you might have these values already fetched from the previous homework of class5)
- **Image URL** (text input)
  - Required field
  - Bonus: Must be a valid URL format

#### Form Validation Requirements:
- Implement client-side validation for all fields
- Display appropriate error messages for validation failures
- Disable submit button when form is invalid (Hint: for this one maybe take a look into the docs of react-hook-form)
- Show loading state during form submission

### 3. API Integration

#### Endpoint Details:
- **URL**: `https://fakestoreapi.com/products`
- **Method**: `POST`
- **Documentation**: [FakeStore API Docs](https://fakestoreapi.com/docs#tag/Products/operation/addProduct)

#### Request Payload Structure:
```json
{
  "title": "string",
  "price": 29.99,
  "description": "string",
  "category": "string", 
  "image": "https://example.com/image.jpg"
}
```

#### Expected Response:
```json
{
  "id": 21,
  "title": "string",
  "price": 29.99,
  "description": "string",
  "category": "string",
  "image": "https://example.com/image.jpg"
}
```

### 4. User Experience Requirements

#### Success Flow:
1. User fills out the form with valid data
2. Form submits successfully to the API
3. Show success message to the user
4. **Display newly created product** on the screen (below the form or in a success modal)
5. Clear the form for new entries
6. Option to redirect to products page or stay on the form





#### Required Dependencies:
```bash
npm install react-hook-form
```


## Important Notes

### ⚠️ API Limitations
- **FakeStore API** is a mock API for testing purposes
- **Data Persistence**: Newly created products will **NOT** persist after page refresh
- **ID Generation**: The API will return a mock ID that may not be unique in subsequent calls
- **Local State**: Consider updating your local state/context to show newly created products immediately

### Testing Strategy
1. Test form validation with invalid inputs
2. Test successful form submission
3. Test error scenarios (network failures)
4. Test the display of newly created products
5. Verify navigation and routing work correctly


Good luck with your implementation! 🚀
