import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Lists/listSlice";

export default configureStore({
  reducer: {
    Lists : listReducer,
  },
});
