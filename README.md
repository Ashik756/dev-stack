# Dev Stack 🚀

---

## Technologies Used 🛠️
* **React** (UI Library)
* **TypeScript** (Type Safety)
* **Tailwind CSS** (Styling)
* **Vite** (Build Tool)
* **React Toastify** (Notifications)

---

## Key Features ✨
1. **Interactive Technology Explorer:** Browse modern technologies categorized by type in a card-based layout.
2. **Dynamic "Your Stack" Management:** Add preferred technologies to your stack, remove specific items with an 'X' , or clear everything using "Remove All".
3. **Real-time Toast Notifications:** Instant feedback alerts powered by `react-toastify` whenever your stack is updated.

---

## React Concepts & Q&A 💡

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript. It allows us to write HTML-like code directly inside JavaScript files, making UI structures much easier to read and write in React.

### 2. What is the difference between props and state?
**Answer:** 
* **Props:** Read-only data passed down from a parent component to a child component.
* **State:** Local data managed within a component that can change over time and triggers UI re-renders.

### 3. What does the useState hook do, and where did you use it in this project?
**Answer:** `useState` is a React Hook used to add and manage state variables in functional components. In this project, it was used to keep track of the user's selected technologies (`selectedStack`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` handles side effects in React, such as fetching data or interacting with external systems. It was needed to fetch and load the technology list from the local JSON file asynchronously when the component loads.

### 5. Why does every item in a .map() list need a unique key prop?
**Answer:** A unique `key` helps React identify which items have changed, been added, or been removed. This optimizes rendering performance and maintains proper component state.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:** Conditional rendering means rendering different UI elements based on specific conditions (using operators like ternary `? :` or `&&`).
* **Example:** "empty stack" message or the selected tech list depending on whether items exist in the stack.
```tsx
{selectedStack.length === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <div>{/* Stack items */}</div>
)}