import {Image, Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, Images} from '../../theme';
import {useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {
  addToCurrentlyReading,
  addToWishList,
  removeFromCurrentlyReading,
  removeFromWishList,
} from '../../redux/slices/booksSlice';

type BookCardButtonsProps = {
  wrapperStyle?: ViewStyle;
  bookId: string;
};

const BookCardButtons = ({wrapperStyle, bookId}: BookCardButtonsProps) => {
  const dispatch = useAppDispatch();
  const wishList = useSelector((state: any) => state.books.wishList);
  const currentlyReading = useSelector(
    (state: any) => state.books.currentlyReading,
  );

  const isFavourited = wishList.find((id: string) => id === bookId);
  const isCurrentlyReading = currentlyReading.find(
    (id: string) => id === bookId,
  );

  const handleFavouritePress = () => {
    isFavourited
      ? dispatch(removeFromWishList(bookId))
      : dispatch(addToWishList(bookId));
  };

  const handleCurrentlyReadingPress = () => {
    isCurrentlyReading
      ? dispatch(removeFromCurrentlyReading(bookId))
      : dispatch(addToCurrentlyReading(bookId));
  };
  return (
    <View style={[wrapperStyle, styles.btnsWrapper]}>
      <Pressable onPress={handleFavouritePress}>
        <Image source={Images.star} style={styles.favourite(isFavourited)} />
      </Pressable>
      <View style={styles.spacer} />
      <Pressable onPress={handleCurrentlyReadingPress}>
        <Image
          source={Images.readingList}
          style={styles.currentlyReading(isCurrentlyReading)}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create<ViewStyle | any>({
  btnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favourite: (isFavourited: boolean) => ({
    width: 30,
    height: 30,
    tintColor: isFavourited ? Colors.gold : Colors.gray,
  }),
  currentlyReading: (isCurrentlyReading: boolean) => ({
    width: 30,
    height: 30,
    tintColor: isCurrentlyReading ? Colors.gold : Colors.gray,
  }),
  spacer: {width: 20},
});

export default BookCardButtons;
