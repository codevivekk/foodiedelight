import { configureStore } from "@reduxjs/toolkit";
import   resturantReducer from "./reducers/resturantReducer.js";

export const store = configureStore({
  reducer: {
    website: resturantReducer
  },
});
