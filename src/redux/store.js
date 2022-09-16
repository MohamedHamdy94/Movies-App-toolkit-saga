import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import favouritsSlice from './favouritsSlice';
import movieSlice from './movieSlice';
import rootsaga from './movieSagas';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movies: movieSlice,
  favourits: favouritsSlice
})
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootsaga)
export default store;
