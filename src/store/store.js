import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/SearchSlice";
import LikedSlice from "../components/LikedSlice";

export const store = configureStore({
  reducer: {
    searchPic: searchReducer,
    likedpic: LikedSlice,
  },
});
