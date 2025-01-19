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
  reducers: {
    // clearItems(state) {
    //   state.items = [];
    //   state.total = 0;
    //   state.page = 1;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.meta.arg.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.total = action.payload.total;
      })

      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getTruckDetails.pending, (state) => {
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
// export const { clearItems } = transportSlice.actions;
