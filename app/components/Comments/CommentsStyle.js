import { StyleSheet, Dimensions } from 'react-native';
import { $paddingTop } from '../../constants/platform';
import * as colors from '../../constants/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const indicatorSize = 36;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20 + $paddingTop,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    left: width / 2 - indicatorSize / 2,
    top: height / 2 - indicatorSize / 2,
    padding: 8,
  },
  refresh: {
    color: colors.$blue,
    fontSize: 25,
    margin: 10,
  },
  refreshContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.$black,
    borderBottomWidth: 1,
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
