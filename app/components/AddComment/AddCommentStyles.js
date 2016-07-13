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
});

export default styles;
