export default function quiz(state = { quizes: null, error: null }, action) {
    switch (action.type) {
      case 'RECORDS/FETCH':
        return state
      case 'RECORDS/FETCH_SUCCESS':
        return {
            ...state,            
            quizes: action.payload
        };
      case 'RECORDS/FETCH_FAILURE':
        return {
            ...state,
            quizes: null,
            error: action.payload
        };
      default:
        return state
    }
  }
  