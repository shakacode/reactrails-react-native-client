import React from 'react';
import { View, Text } from 'react-native';
import styles from './HelloWorldStyle';

const HelloWorld = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
  </View>
);

export default HelloWorld;
