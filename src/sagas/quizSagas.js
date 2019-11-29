import { takeLatest, put, call, all } from 'redux-saga/effects';

function* onFetchRecords() {
  yield takeLatest('RECORDS/FETCH', function* fetchRecords() {

    try {
        const response = yield call(fetch, 'quiz.json') 
        const responseBody = response.json();
        console.log(responseBody);
        yield put({type: 'RECORDS/FETCH_SUCCESS', payload: responseBody.records});
    } catch (e) {
        yield put({type: 'RECORDS/FETCH_FAILED', payload: e});
        return;
    }

  });
}

export function* quizOperationsSagas() {
    yield all([
        onFetchRecords()
    ])
  }
  

