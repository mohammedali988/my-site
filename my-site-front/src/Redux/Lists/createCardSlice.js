import { createSlice } from "@reduxjs/toolkit";

export const createCard = createSlice({
  name: "createCard",
  initialState: true,
  reducers: {
    newCard: (state) => {
      return (state = !state);
    },
  },
});

export const { newCard } = createCard.actions;
export default createCard.reducer;
