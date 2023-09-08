const initialState = {
  name: "",
  email: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {},
  },
});
