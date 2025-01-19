import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    equipment: [],
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
