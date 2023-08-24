import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppRoot from './src/navigation/AppRoot';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRoot />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
