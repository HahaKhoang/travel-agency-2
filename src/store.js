import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../src/features/tours/tourSlice";
import userReducer from "../src/features/tours/userSlice";
import surpriseReducer from "../src/features/tours/surpriseSlice";
import customizedReducer from "../src/features/tours/customizedSlice";

const store = configureStore({
  reducer: {
    tour: tourReducer,
    user: userReducer,
    surprise: surpriseReducer,
    customized: customizedReducer,
  },
});

export default store;
