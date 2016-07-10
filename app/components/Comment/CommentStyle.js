import { StyleSheet } from 'react-native';
const $black = '#000000';
const $gray = '#999999';
const $purple = '#800080';

const styles = StyleSheet.create({
  container: {
    height: 75,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: $gray,
  },
  author: {
    fontSize: 20,
    color: $purple,
  },
  text: {
    fontSize: 15,
    color: $black,
  },
});

export default styles;
