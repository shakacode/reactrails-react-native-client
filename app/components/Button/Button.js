import React, { PropTypes } from 'react';
import { View, Text, Platform, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import styles from './ButtonStyle';

const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;

const Button = ({ onPress, text }) => (
  <Wrapper onPress={onPress}>
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  </Wrapper>
);

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
