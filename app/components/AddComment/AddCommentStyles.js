import { StyleSheet } from 'react-native';
import { $paddingTop } from '../../constants/platform';
import * as colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20 + $paddingTop,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    flex: 1,
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.$black,
    borderBottomWidth: 1,
  },

  input: {
    height: 40,
    padding: 10,
    borderColor: colors.$gray,
    borderWidth: 1,
  },

  errorContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  error: {
    color: colors.$red,
  },
});

export default styles;
