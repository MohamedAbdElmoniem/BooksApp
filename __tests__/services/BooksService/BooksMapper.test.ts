import {
  mapBookDetailsResponse,
  mapBooksResponse,
} from '../../../src/services/BooksService/BooksMapper';

describe('BooksMapper Functions', () => {
  const mockBooksResponse = {
    docs: [
      {
        key: '/works/101010',
        title: 'Book',
        cover_i: 123,
        first_publish_year: 1990,
        author_name: ['Author1', 'Author2'],
      },
    ],
  };

  const mockBookDetailsResponse = {
    key: '/works/456',
    title: 'Book Details',
    covers: [789, 101],
    description: 'description.',
    first_publish_date: '2005',
  };

  test('mapBooksResponse maps API response to Book array', () => {
    const mappedBooks = mapBooksResponse(mockBooksResponse);

    expect(mappedBooks).toHaveLength(1);
    expect(mappedBooks[0].id).toBe('101010');
    expect(mappedBooks[0].title).toBe('Book');
    expect(mappedBooks[0].cover_id).toBe(123);
    expect(mappedBooks[0].first_publish_year).toBe(1990);
    expect(mappedBooks[0].author).toEqual(['Author1', 'Author2']);
  });

  test('mapBookDetailsResponse maps API response to BookDetails', () => {
    const mappedBookDetails = mapBookDetailsResponse(mockBookDetailsResponse);

    expect(mappedBookDetails?.id).toBe('456');
    expect(mappedBookDetails?.title).toBe('Book Details');
    expect(mappedBookDetails?.cover_id).toBe(789);
    expect(mappedBookDetails?.description).toBe('description.');
    expect(mappedBookDetails?.first_publish_year).toBe('2005');
  });

  test('mapBookDetailsResponse handles missing or invalid data', () => {
    const emptyMappedDetails = mapBookDetailsResponse(undefined);
    const undefinedMappedDetails = mapBookDetailsResponse(undefined);

    expect(emptyMappedDetails).toEqual(undefined);
    expect(undefinedMappedDetails).toEqual(undefined);
  });
});
