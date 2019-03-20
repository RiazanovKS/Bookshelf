import { parseString } from "xml2js";

import * as api from "../../api/books";
import * as CONST from "./const";

export const fetchBooks = query => async dispatch => {
  let response = {};

  if (query) {
    try {
      dispatch({ type: CONST.BOOKS_FETCHING });

      response = await api.fetchBooks(query);

      parseString(response.data, (err, result) => {
        const data = result.GoodreadsResponse.search[0].results[0].work.map(
          work => ({
            id: work.best_book[0].id[0]._,
            title: work.best_book[0].title[0],
            authors: work.best_book[0].author[0].name[0],
            covers: [work.best_book[0].image_url[0]]
          })
        );
        dispatch({ type: CONST.BOOKS_PAYLOAD, payload: data });
      });
    } catch (error) {
      dispatch({ type: CONST.BOOKS_ERROR, error });
    }
  } else {
    dispatch({ type: CONST.BOOKS_CLEAR });
  }

  return response;
};
