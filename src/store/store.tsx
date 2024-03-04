import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "./tourSlice";
import userReducer from "./userSlice";
import surpriseReducer from "./surpriseSlice";
import customizedReducer from "./customizedSlice";

const store = configureStore({
  reducer: {
    tour: tourReducer,
    user: userReducer,
    surprise: surpriseReducer,
    customized: customizedReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
