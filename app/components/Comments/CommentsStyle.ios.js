import { StyleSheet, Dimensions } from 'react-native';

const $blue = '#0000FF';
const $black = '#000000';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const indicatorSize = 36;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
    color: $blue,
    fontSize: 25,
    margin: 10,
  },
  refreshContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomColor: $black,
    borderBottomWidth: 1,
  },
});

export default styles;
