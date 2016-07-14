import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const indicatorSize = 36;

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: width / 2 - indicatorSize / 2,
    top: height / 2 - indicatorSize / 2,
    padding: 8,
  },
});

export default styles;
