import { takeLatest, put, call, all } from 'redux-saga/effects';

function* onFetchRecords() {
  yield takeLatest('RECORDS/FETCH', function* fetchRecords() {

    try {
        const response = yield call(fetch, 'quiz.json'); 
        console.log(response);
        const responseBody = yield response.json();
        console.log(responseBody);
        yield put({type: 'RECORDS/FETCH_SUCCESS', payload: responseBody});
        // responseBody.then(function* (data) {
        //   console.log(data);
          
        // });
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
  

