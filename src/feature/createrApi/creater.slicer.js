import { createSlice } from "@reduxjs/toolkit";
import { getCreaterApi } from "./creater.action";
const initialState = {
  createrApi: [],

  createrApiLoading: false,
  createrApiLoadedSuccess: false,
  createrApiLoadedFailed: false,
};
const createrApiSlice = createSlice({
  name: "singleApi",
  initialState,

  extraReducers: {
    [getCreaterApi.pending]: (state) => {
      state.createrApiLoading = true;
    },
    [getCreaterApi.fulfilled]: (state, action) => {
      state.createrApiLoading = false;
      state.createrApiLoadedSuccess = true;
      state.createrApiLoadedFailed = false;
      state.createrApi = action.payload;
    },

    [getCreaterApi.rejected]: (state) => {
      state.createrApiLoadedFailed = true;
    },
  },
});

export default createrApiSlice.reducer;
