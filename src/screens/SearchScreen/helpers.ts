import {Animated, Easing} from 'react-native';

const animateSearchInputToTop = (animatedValue: Animated.Value) => {
  Animated.timing(animatedValue, {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
    easing: Easing.ease,
  }).start();
};

export {animateSearchInputToTop};
