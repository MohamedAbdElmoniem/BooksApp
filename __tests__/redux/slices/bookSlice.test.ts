import {
  addToWishList,
  removeFromWishList,
  addToCurrentlyReading,
  removeFromCurrentlyReading,
} from '../../../src/redux/slices/booksSlice';
import reducer from '../../../src/redux/slices/booksSlice';

const BOOKS_IDS = ['93005405', '93005406', '93005407'];

describe('books slice', () => {
  it('should handle addToWishList', () => {
    const initialState = {
      wishList: [],
      currentlyReading: [],
    };
    const nextState = reducer(initialState, addToWishList(BOOKS_IDS[0]));
    expect(nextState.wishList).toEqual([BOOKS_IDS[0]]);
  });

  it('should handle removeFromWishList', () => {
    const initialState = {
      wishList: BOOKS_IDS,
      currentlyReading: [],
    };
    const nextState = reducer(initialState, removeFromWishList(BOOKS_IDS[0]));
    expect(nextState.wishList).toEqual([BOOKS_IDS[1], BOOKS_IDS[2]]);
  });

  it('should handle addToCurrentlyReading', () => {
    const initialState = {
      wishList: [],
      currentlyReading: [],
    };
    const nextState = reducer(
      initialState,
      addToCurrentlyReading(BOOKS_IDS[0]),
    );
    expect(nextState.currentlyReading).toEqual([BOOKS_IDS[0]]);
  });

  it('should handle removeFromCurrentlyReading', () => {
    const initialState = {
      wishList: [],
      currentlyReading: BOOKS_IDS,
    };
    const nextState = reducer(
      initialState,
      removeFromCurrentlyReading(BOOKS_IDS[0]),
    );
    expect(nextState.currentlyReading).toEqual([BOOKS_IDS[1], BOOKS_IDS[2]]);
  });
});
