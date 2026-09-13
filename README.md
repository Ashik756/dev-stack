# 🧱 Dev Stack 🚀

**Dev Stack** is a responsive React web app that helps developers explore modern web technologies and build their own personal tech stack — pick tools across Frontend, Backend, Database, Language, Styling, DevOps, and Tools categories, add the ones you like, and manage your selections in real time.

---

## 🛠️ Technologies Used
- **React** (UI library)
- **TypeScript** (type safety)
- **Tailwind CSS** (styling)
- **Vite** (build tool)
- **React Toastify** (toast notifications)
- **JSON** (technology data source)

---

## ✨ Key Features
1. **Interactive Technology Explorer** — Browse 15+ technologies in a responsive card grid (1 column on mobile, 2 on tablet, 3 on desktop), each showing its icon, badge, category, difficulty, and rating.
2. **Dynamic "Your Stack" Management** — Add technologies to your personal stack with one click, remove a single item with the ✕ button, or clear everything at once with "Remove All."
3. **Real-time Toast Notifications** — Instant feedback powered by `react-toastify` for every action: adding a technology, attempting a duplicate add, removing an item, and clearing the whole stack.

---

## 💡 React Concepts & Q&A

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that lets us write HTML-like markup directly inside JavaScript/TypeScript files. It's used in React because it makes component UI structure much easier to read, write, and reason about compared to calling `React.createElement()` manually.

### 2. What is the difference between props and state?
**Answer:**
- **Props** — Read-only data passed **down** from a parent component to a child component. A component cannot modify its own props.
- **State** — Local data owned and managed **inside** a component (via `useState`), which can change over time and triggers a re-render whenever it updates.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` lets a functional component create and manage its own state variables. In this project, it's used in the `Technologies` component to track `selectedStack` (the list of technologies the user has added) and in `Navbar` to track the mobile menu's open/closed state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` runs side effects (like data fetching, subscriptions, or DOM interactions) after a component renders. In this project, the technology data is actually loaded using React's `use()` hook together with `Suspense`, rather than `useEffect`: a `fetch("/data.json")` promise is created once at module load and passed into the `Technologies` component, where `use(techPromise)` suspends rendering until the data resolves — Vite/React then shows the `TechSkeleton` fallback UI automatically during that wait.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the `key` prop to identify which items in a list have changed, been added, or been removed between renders. Without a stable, unique key, React may re-render or reorder items incorrectly, hurting both performance and UI correctness — for example, mismatched state in list items after removal.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:** Conditional rendering means showing different UI based on a condition, typically using a ternary (`? :`) or logical `&&` operator. One example from this project is the "Your Stack" panel:
```tsx
{selectedStack.length === 0 ? (
  <div className="border border-dashed ...">Your stack is empty.</div>
) : (
  <div className="space-y-3 ...">
    {selectedStack.map((item) => (
      // render each stack item
    ))}
  </div>
)}
```
If no technology has been added yet, an empty-state message is shown; otherwise, the actual list of selected items is rendered.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** A parent passes data down to a child through **props**. In this project, `Technologies` passes each `tech` object and an `isInStack` boolean down to `TechnologieCard` as props: `<TechnologieCard tech={tech} onAdd={handleAddToStack} isInStack={isInStack} />`. For a child to send data back up, the parent passes a **callback function** as a prop; the child calls that function (optionally with arguments) when something happens. Here, `TechnologieCard` calls `onAdd(tech)` when its button is clicked, which runs `handleAddToStack` back in the parent and updates the `selectedStack` state.

---

## 📤 Submission
- **GitHub Repository:** https://github.com/Ashik756/dev-stack
- **Live Site:** _add your deployed link here_
