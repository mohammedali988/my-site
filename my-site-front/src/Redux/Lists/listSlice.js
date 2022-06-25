import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      if (action.payload.title !== "") {
        state.push(action.payload);
      }
    },

    deleteCard: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addCard, deleteCard } = listSlice.actions;

export default listSlice.reducer;
