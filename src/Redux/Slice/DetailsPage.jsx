import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: null,
};

export const paginationSlice = createSlice({
  name: "detailsValues",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

// Export actions and reducer
export const { setDetails } = paginationSlice.actions;
export default paginationSlice.reducer;
