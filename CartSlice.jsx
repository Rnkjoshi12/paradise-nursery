import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((p) => p.id === id);
      if (item && quantity >= 1) {
        item.quantity = quantity;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
