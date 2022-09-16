import { all } from 'redux-saga/effects';
import { moviesSagas } from './movieSagas';
export default function* rootsaga() {
  yield all([...moviesSagas]);
}
