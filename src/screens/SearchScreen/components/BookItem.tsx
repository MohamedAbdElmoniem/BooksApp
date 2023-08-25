import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {getBookCover} from '../../../services/BooksService/BooksService';
import {BookCardButtons, Row} from '../../../components';
import {Book} from '../../../services/BooksService/BooksMapper';
import {Colors, Images} from '../../../theme';

type BookItemProps = {
  item: Book;
  onPress?: () => void;
};

const BookItem = ({item, onPress}: BookItemProps) => (
  <Pressable onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        defaultSource={Images.defaultBook}
        source={{uri: getBookCover(item.cover_id)}}
        style={styles.bookImg}
      />
      <View style={styles.rightSection}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={styles.authorSectionWrapper}>
          {item?.author?.map((author: string, i: number) => {
            return (
              <Text key={i} style={styles.authorName}>
                {author}
              </Text>
            );
          })}
        </View>
        <Row>
          <Text style={styles.year}>{item.first_publish_year}</Text>
          <BookCardButtons bookId={item?.id} />
        </Row>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create<ViewStyle | any>({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginVertical: 12,
    padding: 15,
    borderRadius: 10,
  },
  bookImg: {height: 120, width: 100, borderRadius: 4},
  authorSectionWrapper: {marginVertical: 10},
  title: {fontSize: 20, fontWeight: 'bold'},
  authorName: {fontSize: 16},
  year: {fontSize: 15, fontWeight: 'bold'},
  rightSection: {marginLeft: 15, flex: 1, justifyContent: 'space-between'},
});

export default BookItem;
