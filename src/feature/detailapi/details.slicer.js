import { createSlice } from "@reduxjs/toolkit";
import { getDetailApi } from "./details.action";
const initialState = {
  detail: [],

  detailLoading: false,
  detailLoadedSuccess: false,
  detailLoadedFailed: false,
};
const detailApiSlice = createSlice({
  name: "detail",
  initialState,

  extraReducers: {
    [getDetailApi.pending]: (state) => {
      state.detailLoading = true;
    },
    [getDetailApi.fulfilled]: (state, action) => {
      state.detailLoading = false;
      state.detailLoadedSuccess = true;
      state.detailLoadedFailed = false;
      state.detail = action.payload;
    },

    [getDetailApi.rejected]: (state) => {
      state.detailLoadedFailed = true;
    },
  },
});

export default detailApiSlice.reducer;
