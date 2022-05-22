import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailApi = createAsyncThunk("detai/api", async (payload) => {
  try {
    const detailData = await axios.get(
      ` http://boax.alshumaal.com/api/Creators/Profile?username=${payload}`
    );
    console.log(detailData, "payload");
    return detailData.data;
  } catch (error) {
    console.log(error, "error in county name api");
  }
});
