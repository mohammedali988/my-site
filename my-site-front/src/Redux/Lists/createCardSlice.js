import { createSlice } from "@reduxjs/toolkit";

export const createCard = createSlice({
  name: "createCard",
  initialState: { open: false, id: 0 },
  reducers: {
    newCard: (state, action) => {
      return (state = { open: true, id: action.payload });
    },
    closeCard: (state) => {
      return (state = { open: false, id: 0 });
    },
  },
});

export const { newCard, closeCard } = createCard.actions;
export default createCard.reducer;
