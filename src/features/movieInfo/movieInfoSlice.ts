import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tmdbConfig } from "../../api/tmdbConfig";
import { RootState } from "../../app/store";
import { Movie, Paramtype } from "../../models";

interface StateType {
  lists: Movie[];
  loading: boolean;
}
const initialState: StateType = {
  lists: [],
  loading: false,
};
export const fectchMovieList = createAsyncThunk(
  "movie/fectchMovieList",
  async ({ type, params }: { type: string; params: Paramtype }) => {
    const response = await tmdbConfig.getMovieList(type, params);

    return response.results.slice(0, 4);
  }
);
const movieInfoSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fectchMovieList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fectchMovieList.fulfilled, (state, action) => {
        state.loading = false;
        state.lists = action.payload;
      });
  },
});
//actions
//selector
export const getAllMovieByType = (state: RootState) => state.movie.lists;
//reducer
export default movieInfoSlice.reducer;
