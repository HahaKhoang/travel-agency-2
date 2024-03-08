import { createSlice } from "@reduxjs/toolkit";

type userInitialState = {
  name: string;
  email: string;
  phone: string;
};

const initialState: userInitialState = {
  name: "",
  email: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { updateName } = userSlice;

export default userSlice.reducer;
