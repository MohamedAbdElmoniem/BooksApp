export type Book = {
  id: string;
  title: string;
  cover_id: number;
  author: string[];
  first_publish_year: number;
};

export type BookDetails = {
  id: string;
  title: string;
  cover_id: number;
  description: string;
  first_publish_year: number | string;
};

const mapBooksResponse = (response: any): Book[] => {
  if (response?.docs) {
    return response.docs.map((book: any) => ({
      id: book.key.replace('/works/', ''),
      title: book.title,
      cover_id: book.cover_i,
      first_publish_year: book.first_publish_year,
      author: book.author_name,
    }));
  }
  return [];
};

const mapBookDetailsResponse = (response: any): BookDetails | undefined => {
  if (response) {
    return {
      id: response?.key?.replace('/works/', ''),
      title: response?.title,
      cover_id:
        response?.covers?.[0] === -1
          ? response?.covers?.[1]
          : response?.covers?.[0],
      description: response?.description
        ? response?.description?.value || response?.description
        : 'No Description',
      first_publish_year: response?.first_publish_date,
    };
  }
  return undefined;
};

export {mapBooksResponse, mapBookDetailsResponse};
