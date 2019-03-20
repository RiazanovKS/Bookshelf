import axios from "axios";
import qs from "qs";

export const API_KEY = "FOn4xsGYPgcO962L5Siyg";

const instance = axios.create({
  baseURL: "http://cors-anywhere.herokuapp.com/https://www.goodreads.com",
  paramsSerializer: qs.stringify
});

export default instance;
