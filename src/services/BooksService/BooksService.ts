import {mapBookDetailsResponse, mapBooksResponse} from './BooksMapper';

const BASE_URL = 'https://openlibrary.org';

const fetchJSON = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

const searchBooks = async (query: string) => {
  try {
    const url = `${BASE_URL}/search.json?title=${query}`;
    const data = await fetchJSON(url);
    return mapBooksResponse(data);
  } catch (error) {
    throw new Error('Failed to fetch search results.');
  }
};

const getBookDetails = async (id: string | number) => {
  try {
    const url = `${BASE_URL}/works/${id}.json`;
    const data = await fetchJSON(url);
    return mapBookDetailsResponse(data);
  } catch (error) {
    throw new Error('Failed to fetch book details.');
  }
};

const getBookCover = (id: string | number | undefined) =>
  `https://covers.openlibrary.org/b/id/${id}-M.jpg`;

export {searchBooks, getBookDetails, getBookCover};
