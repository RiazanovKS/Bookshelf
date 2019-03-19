import axios from 'axios';

const API_KEY = 'FOn4xsGYPgcO962L5Siyg';
const URL = 'https://www.goodreads.com';
const SEARCH_PATH = '/search.xml'
const QUERY = '';

// вместо Promise вставь метод из axios
// export const fetchBooks = () => Axios.get(`${URL}${SEARCH_PATH}?key=${API_KEY}?q=${QUERY}`);
export const fetchBooks = () => axios.get(`${URL}${SEARCH_PATH}?key=${API_KEY}?q=${QUERY}`);