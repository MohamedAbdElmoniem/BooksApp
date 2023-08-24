import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type RowProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Row = ({children, style}: RowProps) => {
  return <View style={[style, styles.wrapper]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Row;
