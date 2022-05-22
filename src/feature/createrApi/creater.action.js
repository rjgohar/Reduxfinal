import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCreaterApi = createAsyncThunk("multi/select", async () => {
  try {
    const data = await axios.get(
      "http://boax.alshumaal.com/admin/admin/api/Creators/readFeaturedCreators.php"
    );
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error, "error");
  }
});
