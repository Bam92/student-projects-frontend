import { configureStore } from "@reduxjs/toolkit";
import projetsReducer from "../feature/projetsSlice";

export default configureStore({
  reducer: {
    projets: projetsReducer,
  },
});
