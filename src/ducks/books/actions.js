import * as api from "../../api/books";
import * as CONST from "./const";

export const fetchBooks = () => async dispatch => {
  let response = {};

  try {
    dispatch({ type: CONST.BOOKS_FETCHING });

    response = await api.fetchBooks();

    dispatch({ type: CONST.BOOKS_PAYLOAD, payload: response });
  } catch (error) {
    dispatch({ type: BOOKS_ERROR, error });
  }

  return response;
};
