import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

import styles from './CommentStyle';

const Comment = (props) => (
  <View style={styles.container}>
    <Text style={styles.author} numberOfLines={1}>{props.author}</Text>
    <Text style={styles.text} numberOfLines={1}>{props.text}</Text>
  </View>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
