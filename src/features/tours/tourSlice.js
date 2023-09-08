import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tourName: "Essential Japan",
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    updateTour(state, action) {
      state.tour = action.tour;
    },
  },
});

export const { updateTour } = tourSlice.actions;

export default tourSlice.reducer;
