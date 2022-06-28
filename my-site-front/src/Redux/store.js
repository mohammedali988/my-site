import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Lists/listSlice";
import cardReducer from "./Lists/cardSlice";
import createCardSlice from "./Lists/createCardSlice";

export default configureStore({
  reducer: {
    Lists: listReducer,
    Cards: cardReducer,
    Card: createCardSlice,
  },
});
