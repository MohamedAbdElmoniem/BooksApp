import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {BookCardButtons} from '../../src/components';
import {Provider} from 'react-redux';
import store from '../../src/redux/store';

describe('BookCardButtons', () => {
  let dispatchFn: any;
  beforeEach(() => {
    dispatchFn = jest.fn();
    store.dispatch = dispatchFn;
  });

  it('renders correctly', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <BookCardButtons />
      </Provider>,
    );
    const favouriteButton = getByTestId('favourite-button');
    const currentlyReadingButton = getByTestId('currently-reading-button');
    expect(favouriteButton).toBeTruthy();
    expect(currentlyReadingButton).toBeTruthy();
  });

  it('calls handleFavouritePress when favourite button is pressed', () => {
    const mockUseSelector = jest.fn();
    mockUseSelector.mockReturnValueOnce([]).mockReturnValueOnce([]);
    const {getByTestId} = render(
      <Provider store={store}>
        <BookCardButtons bookId="12345" />
      </Provider>,
    );

    const favouriteButton = getByTestId('favourite-button');
    fireEvent.press(favouriteButton);
    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });

  it('calls handleCurrentlyReadingPress when currently reading button is pressed', () => {
    const mockUseSelector = jest.fn();
    mockUseSelector.mockReturnValueOnce([]).mockReturnValueOnce([]);
    const {getByTestId} = render(
      <Provider store={store}>
        <BookCardButtons bookId="12345" />
      </Provider>,
    );

    const currentlyReadingButton = getByTestId('currently-reading-button');
    fireEvent.press(currentlyReadingButton);
    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });
});
