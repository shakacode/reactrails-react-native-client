import React, { PropTypes } from 'react';
import { View, ActivityIndicator as ActivityIndicatorNative } from 'react-native';

import styles from './ActivityIndicatorStyle';

const ActivityIndicator = (props) => (
  props.animating ?
    <View style={styles.container}>
      <ActivityIndicatorNative
        size="large"
        color="#0000ff"
        style={styles.indicator}
        animating={props.animating}
      />
    </View> :
    <View />
);

ActivityIndicator.propTypes = {
  animating: PropTypes.bool.isRequired,
};

export default ActivityIndicator;
