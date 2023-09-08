import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../src/features/tours/tourSlice";
import userReducer from "../src/features/tours/userSlice";

const store = configureStore({
  reducer: {
    tour: tourReducer,
    user: userReducer,
  },
});

export default store;
