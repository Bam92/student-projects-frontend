import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createBlogs = createAsyncThunk(
  "blogss/create",
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

export const getBlogs = createAsyncThunk(
  "blogs/get",
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

export const getOneBlogs = createAsyncThunk(
  "blogs/getOne",
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

export const BlogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: null,
    blog: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getOneBlogs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOneBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getOneBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(createBlogs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = [...state.blogs,action.payload];
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default BlogsSlice.reducer;
