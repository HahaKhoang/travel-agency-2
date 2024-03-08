import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "./tourSlice";
import surpriseReducer from "./surpriseSlice";
import customizedReducer from "./customizedSlice";

const store = configureStore({
  reducer: {
    tour: tourReducer,
    surprise: surpriseReducer,
    customized: customizedReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
