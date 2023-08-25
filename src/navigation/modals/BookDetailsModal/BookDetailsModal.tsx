import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import {getBookCover} from '../../../services/BooksService/BooksService';
import {BookDetails} from '../../../services/BooksService/BooksMapper';
import {BookCardButtons} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../theme';

const colors = [Colors.transparent, Colors.white, Colors.white];

type BookDetailsModalProps = {
  isVisible: boolean;
  onClose: () => void;
  bookDetails?: BookDetails;
};

const BookDetailsModal = ({
  isVisible,
  onClose,
  bookDetails,
}: BookDetailsModalProps) => (
  <GestureRecognizer style={styles.recognizer} onSwipeDown={onClose}>
    <Modal
      onDismiss={onClose}
      animationIn={'slideInUp'}
      isVisible={isVisible}
      onModalHide={onClose}
      style={styles.modal}>
      <View style={styles.modalContent}>
        <View style={styles.slideIndicatorContainer}>
          <View style={styles.slideIndicator} />
        </View>
        <View>
          <ImageBackground
            source={{uri: getBookCover(bookDetails?.cover_id)}}
            style={styles.cover}>
            <LinearGradient
              colors={colors}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 2}}
              style={styles.gradient}
            />
          </ImageBackground>
          <View style={styles.btnsWrapper}>
            <BookCardButtons bookId={bookDetails?.id} />
          </View>
        </View>
        <ScrollView alwaysBounceVertical={false}>
          <View style={styles.body}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {bookDetails?.title}
            </Text>
            <Text ellipsizeMode="tail" style={styles.desc}>
              {bookDetails?.description}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.year}>
              {bookDetails?.first_publish_year}
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  </GestureRecognizer>
);

const styles = StyleSheet.create({
  recognizer: {flex: 1},
  modal: {margin: 0, top: 180},
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  slideIndicatorContainer: {alignItems: 'center', top: -20},
  slideIndicator: {
    width: 130,
    backgroundColor: 'black',
    height: 8,
    borderRadius: 4,
  },
  cover: {
    height: 320,
    resizeMode: 'stretch',
    top: -8,
  },
  btnsWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 8,
    flexDirection: 'row',
    borderRadius: 10,
  },
  title: {fontSize: 22, fontWeight: 'bold'},
  year: {fontSize: 16, marginTop: 10, fontWeight: 'bold'},
  desc: {fontSize: 16, marginTop: 10},
  body: {padding: 12, top: -15},
  gradient: {
    position: 'absolute',
    top: 10,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BookDetailsModal;
