import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    location: "",
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
    transmission: "",
    engine: "",
    form: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.data = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
