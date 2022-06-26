import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    deleteCard: (state, action) => {},
  },
});

export const { addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
