import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 2,
  name: "Japan Test",
  slug: "japan-test",
  duration: 6,
  quantity: 1,
  price: 80,
  totalPrice: 100,
  accommodationFee: false,
  flightFee: false,
  reservationFee: false,
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
        duration: action.payload.duration,
        totalPrice: action.payload.price,
        quantity: 1,
        accommodationFee: false,
        flightFee: false,
        reservationFee: false,
      };
    },
    updateQuantity(state, action) {
      state.quantity = action.payload;
    },
    updateAccommodation(state, action) {
      state.accommodationFee = action.payload;
    },
    updateFlight(state, action) {
      state.flightFee = action.payload;
    },
    updateReservations(state, action) {
      state.reservationFee = action.payload;
    },
  },
});

export const {
  addTour,
  updateQuantity,
  updateAccommodation,
  updateFlight,
  updateReservations,
} = tourSlice.actions;

export default tourSlice.reducer;
