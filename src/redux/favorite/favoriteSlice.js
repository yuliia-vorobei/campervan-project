import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorites(state, action) {
      const itemId = action.payload;
      if (state.items.includes(itemId)) {
        state.items = state.items.filter((id) => id !== itemId);
      } else {
        state.items = [...state.items, itemId];
      }
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorites } = favoriteSlice.actions;
