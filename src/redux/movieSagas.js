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
  setLoading
} from './movieSlice'

function* onLoadMoviesAsync({ payload }) {
  yield put(setLoading(true));
  try {
    const moviesInfo = payload;

    const response = yield call(fetchMovies,moviesInfo);
console.log(response)
      yield put(setMovies(response.data.results));
      yield put(setLoading(false));

  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeEvery(getMovies.type, onLoadMoviesAsync);
}

// ////////////////////////////////    movie   ////////////////////////

function* onLoadMovieAsync({ payload }) {
  yield put(setLoading(true));

  try {
    const movieInfo = payload;
    const response = yield call(fetchMovie, movieInfo);
    console.log(response)

      yield put(setMovie( response.data));
      yield put(setLoading(false));

  } catch (error) {
    console.log(error);
  }
}
function* onLoadMovie() {
  yield takeEvery(getMovie.type, onLoadMovieAsync);
}

// ////////////////////////////////    search   ////////////////////////
function* onLoadSearchMoviesAsync({ payload }) {
  yield put(setLoading(true));

  try {
    const moviesInfo = payload;
    const response = yield call(fetchSearchMovie,moviesInfo);
console.log(response.data)
      yield put(setSearchMovies(response.data.results));
      
      yield put(setLoading(false));

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
