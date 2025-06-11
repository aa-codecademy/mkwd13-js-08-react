# React Introduction - Homework Assignment

## Requirements

### 1. Create a Book Library Application

Build a simple book library application that displays a collection of books. Your application should include:

#### A. App Component (Main Component)
- Use the existing `App` component that comes with your Vite bootstrap
- Feel free to remove the default styles from App.css and index.css
- Add a title for your application (e.g., "My Book Library")
- Include at least one other component inside App: `BookList` and `Header`

#### B. Header Component
- Create a functional component called `Header`
- Should receive at least one prop (e.g., `title`, `username`, etc.)
- Add appropriate styling to the header

#### C. BookList Component
- Create a functional component called `BookList`
- Include an array of at least 5 book objects with the following properties:
  - id (number)
  - title (string)
  - author (string)
  - year (number)
  - isRead (boolean)
- Use the map function to render each book's information directly in JSX
- Make sure to include a key prop for each mapped element
- Display each book's information in a visually appealing way
- Add conditional rendering based on the `isRead` property (display different text or styling for books that have been read)

#### E. Styling
- Apply CSS styling to your components using at least two of the methods we learned:
  - External CSS file
  - CSS modules
  - Inline styles

## Bonus Tasks (Optional)
1. Create a `Footer` component that displays the current year using JavaScript's Date object
2. Implement a `Counter` component that displays how many books are in your library

## Submission Guidelines
- Make sure your code is organized and properly commented
- Ensure there are no TypeScript errors
- Test your application to make sure all components render correctly