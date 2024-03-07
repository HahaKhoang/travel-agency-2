import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type surpriseStateProps = {
  duration: number;
  price: number;
  quantity: number;
};

const initialState: surpriseStateProps = {
  duration: 1,
  price: 500,
  quantity: 1,
};

const surpriseSlice = createSlice({
  name: "surprise",
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
  },
});

export const { updateDuration, updatePrice, updateQuantity } =
  surpriseSlice.actions;

export default surpriseSlice.reducer;
