import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ButtonStyle';

const Button = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
