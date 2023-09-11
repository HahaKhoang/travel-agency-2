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
    updateAccommodation(state, action) {
      state.accommodationFee = action.payload;
    },
    updateFlight(state, action) {
      state.flightFee = action.payload;
    },
    updateReservations(state, action) {
      state.reservationFee = action.payload;
    },
    // addTour(state, action) {
    //   state.tour.push(action.payload);
    // },
    // increaseTourQuantity(state, action) {
    //   const tour = state.tour.find((tour) => tour.id === action.payload);
    //   tour.quantity++;
    //   tour.totalPrice = tour.quantity * tour.price;
    // },
    // increaseTourQuantity(state, action) {
    //   state.tour.quantity = action.payload;
    //   state.tour.totalPrice = state.tour.quantity * state.tour.price;
    // },
    // decreaseTourQuantity(state, action) {
    //   const tour = state.tour.find((tour) => tour.id === action.payload);
    //   tour.quantity--;
    //   tour.totalPrice = tour.quantity * tour.price;
    // },
    // addAccommodation(state, action) {
    //   state.tour.accommodationFee = true;
    // },
    // getTotalPrice(state, action) {
    //   state.tour.totalPrice = action.payload;
    // },
  },
});

export const {
  updateName,
  addTour,
  updateAccommodation,
  updateFlight,
  updateReservations,
  // addTour,
  // increaseTourQuantity,
  // decreaseTourQuantity,
  // addAccommodation,
  // getTotalPrice,
} = tourSlice.actions;

export default tourSlice.reducer;
