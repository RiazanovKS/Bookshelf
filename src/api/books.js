import qs from "qs";

import api, { API_KEY } from "api";

const query = {
  key: API_KEY,
  q: "harry potter"
};

// export const fetchBooks = () => axios.get(`${URL}${SEARCH_PATH}?key=${API_KEY}?q=${QUERY}`);
export const fetchBooks = q =>
  api.get(`/search.xml?${qs.stringify({ ...query, q })}`);
