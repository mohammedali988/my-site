import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    deleteCard: (state, action) => {},

    deleteOneCard: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (action.payload === state[i].id) {
          state.splice(i, 1);
        }
      }
    },

    deleteAllCards: (state, action) => {
      return state.filter((e) => {
        return e.id !== action.payload;
      });
    },
  },
});

export const { addCard, deleteCard, deleteAllCards, deleteOneCard } =
  cardSlice.actions;
export default cardSlice.reducer;
