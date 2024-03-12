import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type tourInitialState = {
  id: number;
  name: string;
  slug: string;
  duration: number;
  quantity?: number;
  price: number;
  totalPrice: number;
  accommodationFee?: boolean;
  flightFee?: boolean;
  reservationFee?: boolean;
};

const initialState: tourInitialState = {
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
    addTour(_, action: PayloadAction<tourInitialState>) {
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
  addTour,
  updateQuantity,
  updateAccommodation,
  updateFlight,
  updateReservations,
} = tourSlice.actions;

export default tourSlice.reducer;
