module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-code-push|react-native-modal|redux-persist)/)',
  ],
};
