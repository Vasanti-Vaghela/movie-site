const API_KEY = "76ee9f81";
const BASE_URL = "http://omdbapi.com/?i=tt3896198&";

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};
