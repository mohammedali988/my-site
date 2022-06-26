import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    addList: (state, action) => {
      if (action.payload.title !== "") {
        state.push(action.payload);
      }
      console.log(state[0], "here is the state");
    },

    deleteList: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addList, deleteList } = listSlice.actions;

export default listSlice.reducer;
