import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../src/features/tours/tourSlice";

const store = configureStore({
  reducer: {
    tour: tourReducer,
  },
});

export default store;
