import { StyleSheet } from 'react-native';
import * as colors from 'app/styles/colors';
import * as sizes from 'app/styles/sizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
    paddingTop: sizes.STATUS_BAR_HEIGHT + sizes.NAVBAR_HEIGHT,
  },
});

export default styles;
