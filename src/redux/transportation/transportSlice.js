import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, getTruckDetails } from "./operations";

const transportSlice = createSlice({
  name: "transport",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
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
        const truck = action.payload;
        if (!Array.isArray(state.data)) {
          state.data = [];
        }
        const existingTruckIndex = state.data.findIndex(
          (item) => item.id === truck.id
        );

        if (existingTruckIndex === -1) {
          state.data.push(truck);
        } else {
          state.data[existingTruckIndex] = truck;
        }
      })

      .addCase(getTruckDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default transportSlice.reducer;
