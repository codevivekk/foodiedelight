import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturants: [],
  page: 1,
  isLast: false,
  search: {},
  limit: 15,
};
const resturantReducer = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.resturants = [...state.resturants, ...action.payload];
    },
    setSearchRestaurants: (state, action) => {
      state.resturants = [...state.resturants, ...action.payload];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setIsLast: (state, action) => {
      state.isLast = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setRestaurants,
  setPage,
  setIsLast,
  setSearch,
  setLimit,
  setSearchRestaurants,
  resetState
} = resturantReducer.actions;
export default resturantReducer.reducer;
