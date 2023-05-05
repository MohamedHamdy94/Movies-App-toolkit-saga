import { takeEvery , put,take, fork, call, takeLatest ,all} from 'redux-saga/effects';

import {   
  fetchMovie,
  fetchMovies,
  fetchSearchMovie,
 } from './api';
import{

  getMovies,
  setMovies,

  getMovie,
  setMovie,

  setSearchMovies,
  getSearchMovies,
  
} from './movieSlice'

function* onLoadMoviesAsync({ payload }) {
  
  try {
    const moviesInfo = payload;

    const response = yield call(fetchMovies,moviesInfo);
console.log(response)
      yield put(setMovies(response.data));

  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeEvery(getMovies.type, onLoadMoviesAsync);
}

// ////////////////////////////////    movie   ////////////////////////

function* onLoadMovieAsync({ payload }) {
  

  try {
    const movieInfo = payload;
    const response = yield call(fetchMovie, movieInfo);
    console.log(response)

      yield put(setMovie( response.data));

  } catch (error) {
    console.log(error);
  }
}
function* onLoadMovie() {
  yield takeEvery(getMovie.type, onLoadMovieAsync);
}

// ////////////////////////////////    search   ////////////////////////
function* onLoadSearchMoviesAsync({ payload }) {
  
  try {
    const moviesInfo = payload;
    const response = yield call(fetchSearchMovie,moviesInfo);
console.log(response.data)
      yield put(setSearchMovies(response.data.results));
      
  } catch (error) {
    console.log(error);
  }
}

function* onLoadSearchMovies() {
  yield takeEvery(getSearchMovies.type, onLoadSearchMoviesAsync);
}

// export const moviesSagas = [

//   fork(onLoadMovies),
//   fork(onLoadMovie),
//   fork(onLoadSearchMovies),
// ];

export default function* rootsaga() {
  yield all([onLoadMovies(),onLoadMovie(),onLoadSearchMovies()])
}
