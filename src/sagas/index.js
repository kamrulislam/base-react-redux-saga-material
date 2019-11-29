import { all } from 'redux-saga/effects'
import { helloSaga } from './helloSaga'
import { numberOperationsSagas } from './numberOperationsSagas'
import { quizOperationsSagas } from './quizSagas'

export default function* rootSaga() {
    yield all([
      helloSaga(),
      numberOperationsSagas(),
      quizOperationsSagas()
    ])
  }
