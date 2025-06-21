# React Homework: "My Personal Blog" App

Welcome back for your second React homework assignment! This time, you'll be building a simplified personal blog application. This project will heavily utilize **React Router** for navigation and the **Context API** for global state management.

## 🚀 Getting Started

1.  **Create a New Project:** Inside your existing react homeworks repository, create a new React project using Vite.

    example:

    ```bash
    npm create vite@latest my-blog-app -- --template react-ts
    cd my-blog-app
    npm install
    ```

2.  **Install React Router:** You'll need to install `react-router-dom` for routing.
    ```bash
    npm install react-router-dom
    ```
3.  **Start Coding!** Open the `my-blog-app` folder in your code editor and begin working on the requirements below.

## ✨ Project: My Personal Blog App

You're going to build a basic blog where you can list posts, view individual posts, and manage them globally.

### Basic Requirements (Level 1)

Your app should meet the following basic criteria:

1.  **Application Structure & Routing:**

    - **Home Page (`/`):** Displays a list of all blog posts.
    - **Post Detail Page (`/posts/:id`):** Displays the full content of a single blog post. The `:id` part of the URL should correspond to the post's unique identifier.
    - **About Page (`/about`):** A simple page with some static text about you or the blog.
    - **Navigation:** Create a navigation bar (e.g., in the header) with links to "Home" and "About". When on a specific post's detail page, there should be a way to go back to the home page (e.g., a "Back to Posts" link or by clicking the "Home" nav link).
    - Use `BrowserRouter` to wrap your entire application, `Routes` to define your routes, and `Link` for navigation.

2.  **Blog Post Data (Using Context API):**

    - Create a **Context** (`BlogContext` or similar) to store and manage your blog post data.
    - Initialize this context with an array of at least 3-4 hardcoded blog post objects. Each post object should have:
      - `id`: A unique number or string.
      - `title`: String.
      - `content`: A longer string of text for the post body.
      - `author`: String.
      - `createdAt`: Date.
    - Wrap your entire application (or at least the parts that need access to post data) with the `BlogContext.Provider`.
    - Ensure components like the Home Page (to list posts) and Post Detail Page (to find a specific post) consume this context using `useContext`.

3.  **Home Page (`/`):**

    - Retrieve all blog posts from the `BlogContext`.
    - Display each post's title and author as a list.
    - Each post title should be a clickable link that navigates to the corresponding Post Detail Page (`/posts/:id`).

4.  **Post Detail Page (`/posts/:id`):**

    - Retrieve the post `id` from the URL parameters using `useParams`.
    - Using this `id`, find the corresponding post from your `BlogContext` data.
    - Display the post's title, author, date, and full content.
    - Handle the case where a post with the given `id` is not found (e.g., display a "Post Not Found" message).

5.  **Basic Styling:** (Optional)
    - Styling is not required, but we encourage you to try to make your blog app visually appealing.
    - You can use either CSS or Tailwind CSS to style your app, whatever you prefer.

## 📦 Submission

Once you're finished (or when the deadline approaches):

1.  **Commit Your Changes:** Make sure all your code changes are committed to your `my-blog-app` project within your repository.
2.  **Push to GitHub:** Push your changes to your GitHub repository.
3.  **Share the Link:** Send the link to your repository to the trainer and assistant via email. You can find their email addresses in the shared classroom repository documentation.

This project is a significant step up, so take your time, and don't hesitate to ask for clarification if you get stuck. Good luck and happy coding!
