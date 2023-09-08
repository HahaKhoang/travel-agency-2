import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tour: {
    id: 2,
    name: "Essential Japan",
    slug: "japan-test",
    quantity: 2,
    price: 80,
    totalPrice: 100,
  },
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    addTour(state, action) {
      return {
        id: action.payload.id,
        name: action.payload.name,
        slug: action.payload.slug,
        price: action.payload.price,
      };
    },

    increaseTourQuantity(state, action) {
      const tour = state.tour.find((tour) => tour.id === action.payload);
      tour.quantity++;
      tour.totalPrice = tour.quantity * tour.price;
    },
    decreaseTourQuantity(state, action) {
      const tour = state.tour.find((tour) => tour.id === action.payload);
      tour.quantity--;
      tour.totalPrice = tour.quantity * tour.price;
    },
  },
});

export const { addTour, increaseTourQuantity, decreaseTourQuantity } =
  tourSlice.actions;

export default tourSlice.reducer;
