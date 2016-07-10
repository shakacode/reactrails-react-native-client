import { StyleSheet } from 'react-native';
import * as colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: 75,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.$gray,
  },
  author: {
    fontSize: 20,
    color: colors.$purple,
  },
  text: {
    fontSize: 15,
    color: colors.$black,
  },
});

export default styles;
