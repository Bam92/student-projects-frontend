import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createProjects = createAsyncThunk(
  "projets/create",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("", data);
      return res;
    } catch (error) {
      const message =
        (error && error.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProjects = createAsyncThunk(
  "projets/get",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("");
      return res.data;
    } catch (error) {
      const message =
        (error && error.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getOneProjects = createAsyncThunk(
  "projets/get/One",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("");
      return res.data;
    } catch (error) {
      const message =
        (error && error.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const projetsSlice = createSlice({
  name: "projects",
  initialState: {
    projets: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projets = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getOneProjects.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOneProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projets = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getOneProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(createProjects.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projets = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default projetsSlice.reducer;
