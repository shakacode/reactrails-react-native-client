import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const Comment = (props) => (
  <Text>{`${props.author}: ${props.text}`}</Text>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
