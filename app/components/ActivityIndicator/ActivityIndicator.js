import React, { PropTypes } from 'react';
import { ActivityIndicator as ActivityIndicatorNative } from 'react-native';

import styles from './ActivityIndicatorStyle';

const ActivityIndicator = (props) => (
  <ActivityIndicatorNative
    size="large"
    color="#0000ff"
    style={styles.indicator}
    animating={props.animating}
  />
);

ActivityIndicator.propTypes = {
  animating: PropTypes.bool.isRequired,
};

export default ActivityIndicator;
