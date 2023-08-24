import * as React from 'react';
import {SearchScreen} from '../screens';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../theme';

const AppRoot = () => {
  const isLoading = useSelector((state: any) => state.app.loading);
  return (
    <SafeAreaView style={styles.wrapper}>
      <SearchScreen />
      <Spinner visible={isLoading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {backgroundColor: Colors.background, flex: 1},
});

export default AppRoot;
