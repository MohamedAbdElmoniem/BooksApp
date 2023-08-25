import {FlatList, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import BookItem from './BookItem';
import {BookDetailsModal} from '../../../navigation';
import {Book} from '../../../services/BooksService/BooksMapper';
import {useMutation} from 'react-query';
import {getBookDetails} from '../../../services/BooksService/BooksService';
import {useAppDispatch} from '../../../redux/store';
import {setLoading} from '../../../redux/slices/appSlice';

type BooksListProps = {
  booksList: Book[];
};

function BooksList({booksList}: BooksListProps) {
  const [showBookDetails, setShowBookDetails] = useState<boolean>(false);
  const {isLoading, data, mutate} = useMutation({mutationFn: getBookDetails});
  const dispatch = useAppDispatch();

  useEffect(() => {
    isLoading ? dispatch(setLoading(true)) : dispatch(setLoading(false));
    if (data) {
      setShowBookDetails(true);
    }
  }, [data, isLoading, dispatch]);

  const renderBook = useCallback(
    ({item}: {item: Book}) => {
      return (
        <BookItem
          item={item}
          onPress={() => {
            mutate(item?.id);
          }}
        />
      );
    },
    [mutate],
  );

  return (
    <>
      <FlatList
        style={styles.wrapper}
        data={booksList}
        renderItem={renderBook}
        keyExtractor={item => item.id}
      />
      <BookDetailsModal
        isVisible={showBookDetails}
        onClose={() => {
          setShowBookDetails(false);
        }}
        bookDetails={data}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {marginBottom: 80, marginTop: 15},
});

export default BooksList;
