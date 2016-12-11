import { StyleSheet } from 'react-native';
import * as colors from 'ReactRailsApp/app/styles/colors';
import * as sizes from 'ReactRailsApp/app/styles/sizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
    paddingTop: sizes.STATUS_BAR_HEIGHT + sizes.NAVBAR_HEIGHT,
  },
});

export default styles;
