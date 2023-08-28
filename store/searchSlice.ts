import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [],
    searchQuery: "",
  },
  reducers: {
    setSearchDataUser: (state, action) => {
      state.data = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchDataUser } = searchSlice.actions;
export const searchDataUserSelector = (state: RootState) => state.search.data;
export const searchQuerySelector = (state: RootState) =>
  state.search.searchQuery;

export default searchSlice.reducer;
