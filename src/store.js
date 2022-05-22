import { configureStore } from "@reduxjs/toolkit";
import singleApiSlice from "./feature/singleApi/singleapi.slicer";
import createrApiSlice from "./feature/createrApi/creater.slicer";
import detailApiSlice from "./feature/detailapi/details.slicer";
export const store = configureStore({
  reducer: { singleApiSlice, createrApiSlice, detailApiSlice },
});
