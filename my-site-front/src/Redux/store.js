import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Lists/listSlice";
import cardReducer from "./Lists/cardSlice";

export default configureStore({
  reducer: {
    Lists: listReducer,
    Cards: cardReducer,
  },
});
