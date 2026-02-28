# 🛒 StateFlow Store

A modern multi-page React application demonstrating advanced state management using **Context API**, **useReducer**, and **useMemo**.

This project simulates a minimal e-commerce store to showcase scalable React architecture and performance optimization techniques.

---

## 📌 Project Overview

StateFlow Store demonstrates:

* Global state management using Context API
* Structured state transitions with useReducer
* Optimized derived computations using useMemo
* Multi-page navigation using React Router
* Clean and responsive UI design

The application allows users to:

* Browse products
* Add/remove items from cart
* Clear the cart
* Toggle between light and dark themes
* View optimized cart total calculation

---

## 🧠 Core Concepts Implemented

### Context API

* Global state provider wrapping the entire application
* Theme and cart state managed centrally
* State consumed across multiple components without prop drilling

### useReducer

Structured state management with the following actions:

* `TOGGLE_THEME`
* `ADD_TO_CART`
* `REMOVE_FROM_CART`
* `CLEAR_CART`

Reducer ensures predictable state updates and scalability.

### useMemo

Optimized cart total calculation:

```js
const totalPrice = useMemo(() => {
  return state.cart.reduce((total, item) => total + item.price, 0);
}, [state.cart]);
```

Prevents unnecessary recalculations during re-renders.

### React Router

Implemented multi-page navigation:

* Home
* Products
* Cart

---

## 📂 Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ThemeToggle.jsx
│   └── ProductCard.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   └── Cart.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🎨 UI & UX Features

* Clean modern layout
* Responsive design
* Smooth hover transitions
* Dark / Light theme toggle
* Card-based product display
* Clear navigation structure

---

## 🛠️ Tech Stack

* React (Vite)
* React Router DOM
* Context API
* useReducer
* useMemo
* Custom CSS

---

## ⚙️ Installation

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📈 What This Project Demonstrates

This project reflects understanding of:

* Global state architecture in React
* Reducer-driven state patterns
* Performance optimization using memoization
* Component-based folder structuring
* Clean UI implementation

---

---

# 🚀 Experiment 5 – Extension Update

This experiment extends Experiment 4 by enhancing the application with structured state management using **Redux Toolkit**, advanced derived computations using **useMemo**, and adding a new analytics page.

---

## ✅ What Was Updated from Experiment 4

### 🔄 1. Replaced useReducer with Redux Toolkit

- Removed `reducer/appReducer.js`
- Implemented Redux Toolkit using:
  - `configureStore`
  - `createSlice`
- Created `cartSlice` with the following actions:
  - `addItem`
  - `removeItem`
  - `updateQuantity`
  - `clearCart`
- Redux state is accessed using:
  - `useSelector`
  - `useDispatch`
- Redux is used in multiple components:
  - ProductCard
  - Cart
  - Reports

---

### 🟢 2. Context API (Theme Management)

Context API is now used strictly for global UI concerns:

- Dark / Light theme toggle
- Global theme access across components
- Used in:
  - Navbar
  - ThemeToggle
  - App

---

### 🧠 3. useMemo Optimization

`useMemo` is used for derived cart computations:

- Total cart price
- Total product quantity
- Total unique products

Example:

```js
const totalPrice = useMemo(() => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}, [cartItems]);

## 📌 Author

Vansh Sharma
UID: 23BAI70154

