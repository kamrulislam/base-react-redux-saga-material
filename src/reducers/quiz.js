export default function quiz(state = { quizzes: null, error: null }, action) {
    switch (action.type) {
      case 'RECORDS/FETCH':
        return state
      case 'RECORDS/FETCH_SUCCESS':
        return {
            ...state,            
            quizzes: action.payload
        };
      case 'RECORDS/FETCH_FAILURE':
        return {
            ...state,
            quizzes: null,
            error: action.payload
        };
      default:
        return state
    }
  }
  