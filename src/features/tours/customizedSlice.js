import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  duration: 1,
  price: 300,
  quantity: 1,
  accommodationFee: false,
  flightFee: false,
  reservationFee: false,
};

const customizedSlice = createSlice({
  name: "customized",
  initialState,
  reducers: {
    updateDuration(state, action) {
      state.duration = action.payload;
    },
    updatePrice(state, action) {
      state.price = action.payload;
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
  updateDuration,
  updatePrice,
  updateQuantity,
  updateAccommodation,
  updateFlight,
  updateReservations,
} = customizedSlice.actions;

export default customizedSlice.reducer;
