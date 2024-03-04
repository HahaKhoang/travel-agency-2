import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// type CustomizedInitialState = {
//   duration: number;
//   price: number;
//   quantity: number;
//   accommodationFee: boolean;
//   flightFee: boolean;
//   reservationFee: boolean;
// };

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
    updateDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    updatePrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    updateQuantity(state, action: PayloadAction<number>) {
      state.quantity = action.payload;
    },
    updateAccommodation(state, action: PayloadAction<boolean>) {
      state.accommodationFee = action.payload;
    },
    updateFlight(state, action: PayloadAction<boolean>) {
      state.flightFee = action.payload;
    },
    updateReservations(state, action: PayloadAction<boolean>) {
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
