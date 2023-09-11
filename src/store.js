import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../src/features/tours/tourSlice";
import userReducer from "../src/features/tours/userSlice";
import surpriseReducer from "../src/features/tours/surpriseSlice";

const store = configureStore({
  reducer: {
    tour: tourReducer,
    user: userReducer,
    surprise: surpriseReducer,
  },
});

export default store;
