import { all } from 'redux-saga/effects'
import { helloSaga } from './helloSaga'
import { numberOperationsSagas } from './numberOperationsSagas'

export default function* rootSaga() {
    yield all([
      helloSaga(),
      numberOperationsSagas()
    ])
  }
