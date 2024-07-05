import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalCount: null,
};

export const paginationSlice = createSlice({
  name: "paginationValues",
  initialState,
  reducers: {
    setNextPage: (state) => {
      state.currentPage += 1;
    },
    setPrePage: (state) => {
      if (state.currentPage !== 1) {
        state.currentPage = state.currentPage - 1;
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});

// Export actions and reducer
export const { setNextPage, setPrePage, setCurrentPage, setTotalCount } =
  paginationSlice.actions;
export default paginationSlice.reducer;
