import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = createAsyncThunk(
  "transport/fetchAll",
  async ({ page, perPage, filter }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/campers?page=${page}&limit=${perPage}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTruckDetails = createAsyncThunk(
  "transport/fetchTruckDetail",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
