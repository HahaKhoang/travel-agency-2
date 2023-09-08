import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tourName: "Essential Japan",
  totalPrice: "",
  cart: [
    {
      id: 2,
      name: "Essential Japan",
      quantity: 2,
      price: 50,
      totalPrice: 100,
    },
  ],
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    updateTourName(state, action) {
      state.tourName = action.tourName;
    },
    updateTotalPrice(state, action) {
      state.totalPrice = action.totalPrice;
    },
    addTour(state, action) {
      state.cart.push(action.payload);
    },
    deleteTour(state, action) {
      state.cart = state.cart.filter((tour) => tour.id !== action.payload);
    },
    increaseTour(state, action) {
      const tour = state.cart.find((tour) => tour.id === action.payload);
      tour.quantity++;
      tour.totalPrice = tour.quantity * tour.price;
    },
    decreaseTour(state, action) {
      const tour = state.cart.find((tour) => tour.id === action.payload);
      tour.quantity--;
      tour.totalPrice = tour.quantity * tour.price;
    },
  },
});

export const {
  updateTourName,
  updateTotalPrice,
  addTour,
  deleteTour,
  increaseTour,
  decreaseTour,
} = tourSlice.actions;

export default tourSlice.reducer;
