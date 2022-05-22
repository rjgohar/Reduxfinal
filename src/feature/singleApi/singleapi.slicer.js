import { createSlice } from "@reduxjs/toolkit";
import { getSingleApi } from "./singleapi.action";
const initialState = {
  singleApi: [],

  singleApiLoading: false,
  singleApiLoadedSuccess: false,
  singleApiLoadedFailed: false,
};
const singleApiSlice = createSlice({
  name: "singleApi",
  initialState,

  extraReducers: {
    [getSingleApi.pending]: (state) => {
      state.singleApiLoading = true;
    },
    [getSingleApi.fulfilled]: (state, action) => {
      state.singleApiLoading = false;
      state.singleApiLoadedSuccess = true;
      state.singleApiLoadedFailed = false;
      state.singleApi = action.payload;
    },

    [getSingleApi.rejected]: (state) => {
      state.singleApiLoadedFailed = true;
    },
  },
});

export default singleApiSlice.reducer;
