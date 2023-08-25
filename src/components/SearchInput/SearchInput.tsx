import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Row from '../Row/Row';
import {Colors, Images} from '../../theme';

interface SearchInputProps extends TextInputProps {
  onSearch: (searchValue: string) => void;
  wrapperStyle: ViewStyle;
}

const SearchInput = (props: Partial<SearchInputProps>) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Animated.View style={props.wrapperStyle}>
      <Row>
        <TextInput
          {...props}
          value={searchValue}
          onChangeText={setSearchValue}
          style={[props.style, styles.input]}
          placeholderTextColor={Colors.gray}
          testID="search-input"
        />
        <Pressable
          onPress={() => props.onSearch?.(searchValue)}
          testID="search-button">
          <Image source={Images.search} style={styles.searchIcon} />
        </Pressable>
      </Row>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    padding: 10,
    height: 55,
    color: 'black',
  },
  searchIcon: {
    width: 28,
    height: 28,
    marginLeft: 15,
    marginRight: 4,
    tintColor: Colors.purple,
  },
});

export default SearchInput;
