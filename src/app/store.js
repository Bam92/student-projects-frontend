import { configureStore } from "@reduxjs/toolkit";
import projetsReducer from "../feature/projetsSlice";
import blogsReducer from "../feature/blogslice";

export default configureStore({
  reducer: {
    projets: projetsReducer,
    blogs : blogsReducer
  },
});
