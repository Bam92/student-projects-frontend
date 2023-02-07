import { createSlice } from "@reduxjs/toolkit";

export const projetsSlice = createSlice({
  name: "projets",
  initialState: {
    projets: null,
  },
  reducers: {
    setProjetsData: (state, { payload }) => {
      state.projets = payload;
    },
    setOneProjetsData: (state, { payload }) => {
      state.projets = state.projets.filter((projet) => projet.id === payload);
    },
    addProjet: (state, { payload }) => {
      state.projets.push(payload);
    },
  },
});

export const { setProjetsData, setOneProjetsData, addProjet } =
  projetsSlice.actions;
export default projetsSlice.reducer;
