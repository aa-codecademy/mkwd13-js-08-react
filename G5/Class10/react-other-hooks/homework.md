# Homework: Optimized List with Actions (React + TypeScript)

## Goal

Practice using the following React hooks and concepts:
- `useCallback`
- `useMemo`
- `React.memo`

You will build a small app that displays a list of numbers, lets you increment each number, and shows the sum of all numbers. You will optimize your app so it only re-renders and recalculates when necessary.

---

## Requirements

### 1. Display a List of Numbers

- Start with an array of numbers, for example: `[1, 2, 3, 4, 5]`.
- Show each number in a list on the screen.

### 2. Increment Button

- Next to each number, add a button labeled "Increment".
- When the button is clicked, only that number should increase by 1.

### 3. Show the Sum

- Display the sum of all numbers above or below the list.

### 4. Optimization

You must use the following hooks and techniques:

- **`useMemo`**:  
  Use this to calculate the sum of the numbers. The sum should only be recalculated when the numbers change, not on every render.

- **`useCallback`**:  
  Use this to create the function that increments a number. The function should not be recreated on every render unless necessary.

- **`React.memo`**:  
  Make each list item its own component and wrap it with `React.memo` so it only re-renders when its props (the number or the increment function) change.

---

## Example (How It Should Look)

```
Sum: 15

1 [Increment]
2 [Increment]
3 [Increment]
4 [Increment]
5 [Increment]
```

- Clicking "Increment" next to `3` should change it to `4`, and the sum should update to `16`.

---

## Tips

- Use TypeScript for type safety.
- Make sure your increment function only updates the correct number.
- Test that only the changed list item re-renders (not all of them).

---

## Extra Challenge (Optional)

- Try to add a "Reset" button to set all numbers back to their original values.
- Add a way to add or remove numbers from the list.

---

**Good luck!**