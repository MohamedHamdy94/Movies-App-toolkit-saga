
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: {},
    movies: [],
    page: 1,
    total_pages:0,
    lang: 'en',
    search:'',
    loading:false
  },
  reducers: {
    getMovies(info) {
    
      return info;

    },
    setMovies: (state, action) => {
      state.movies = action.payload.results;
      state.total_pages=action.payload.total_pages;
      state.page = action.payload.page;
    },

    getMovie(info) {
      return info;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },

    setMoviesPage: (state, action) => {
      state.page = action.payload;

    },

    setMoviesLang: (state, action) => {
      state.lang = action.payload;

    },
    getSearchMovies(info) {
      return info;
    },
    setSearchMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearch:(state, action)=>{
      state.search = action.payload;

    },
    setLoading:(state, action)=>{
      state.loading = action.payload;
    },
  },
});
export const {
  getMovies,
  setMovies,
  getMovie,
  setMovie,
  setMoviesPage,
  setMoviesLang,
  getSearchMovies,
  setSearchMovies,
  setSearch,setLoading
} = movieSlice.actions;
export default movieSlice.reducer;
