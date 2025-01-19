import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, getTruckDetails } from "./operations";

const transportSlice = createSlice({
  name: "transport",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 4,
    total: 0,
    camper: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log("Fetched items:", action.payload.items);
        state.items = [...state.items, ...action.payload.items];
        state.total = Math.floor(action.payload.total / state.perPage);
      })

      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getTruckDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTruckDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camper = action.payload;
        state.error = null;
      })

      .addCase(getTruckDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default transportSlice.reducer;
