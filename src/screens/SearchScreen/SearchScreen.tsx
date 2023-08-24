import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {SearchInput} from '../../components';
import {animateSearchInputToTop} from './helpers';
import {useMutation} from 'react-query';
import {searchBooks} from '../../services/BooksService/BooksService';
import {useAppDispatch} from '../../redux/store';
import {setLoading} from '../../redux/slices/appSlice';
import BooksList from './components/BooksList';

const SearchScreen = () => {
  const {isLoading, mutate, data} = useMutation({
    mutationFn: searchBooks,
  });
  const animatedValue = useRef(new Animated.Value(200)).current;
  const dispatch = useAppDispatch();

  const moveInputToTop = () => {
    animateSearchInputToTop(animatedValue);
  };

  useEffect(() => {
    isLoading ? dispatch(setLoading(true)) : dispatch(setLoading(false));
  }, [isLoading, dispatch]);

  return (
    <View style={styles.wrapper}>
      <SearchInput
        placeholder="Search for a book.."
        onSearch={txt => {
          if (txt) {
            moveInputToTop();
            mutate(txt);
          }
        }}
        wrapperStyle={{
          top: animatedValue,
        }}
      />
      <BooksList booksList={data || []} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {padding: 10},
});

export default SearchScreen;
