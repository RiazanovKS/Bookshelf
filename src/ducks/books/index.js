import * as CONST from "./const";

const initialState = {
  isFetching: false,
  payload: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.BOOKS_FETCHING:
      return { ...state, isFetching: true };
    case CONST.BOOKS_PAYLOAD:
      return { ...state, isFetching: false, payload: action.payload };
    case CONST.BOOKS_ERROR:
      return { ...state, isFetching: false, payload: action.error };
    default:
      return state;
  }
};

export default reducer;
