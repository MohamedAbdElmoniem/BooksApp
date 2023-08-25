import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SearchInput} from '../../src/components';

describe('SearchInput Component', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<SearchInput />);
    const inputElement = getByTestId('search-input');
    expect(inputElement).toBeTruthy();
  });

  it('calls onSearch with the correct value when search button is pressed', () => {
    const mockOnSearch = jest.fn();
    const {getByTestId} = render(<SearchInput onSearch={mockOnSearch} />);

    const inputElement = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    fireEvent.changeText(inputElement, 'test search');
    fireEvent.press(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith('test search');
  });
});
