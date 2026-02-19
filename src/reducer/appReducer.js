export const initialState = {
  theme: "light",
  cart: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};
