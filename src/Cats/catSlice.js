import { createSlice } from "@reduxjs/toolkit";

export const CAT_API_URL = "https://thatcopy.pw/catapi/rest/";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    loading: false,
    error: false,
    data: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, setData } = catSlice.actions;

export default catSlice.reducer;
