import React, { PropTypes } from 'react';
import { Text, View, TextInput } from 'react-native';

import Button from '../Button/Button';
import styles from './AddCommentStyles';

const AddComment = (props) => (
  <View style={styles.container}>
    <View style={styles.buttonsContainer}>
      <Button text="Add Comment" />
      <Button onPress={props.navigator.pop} text="Back" />
    </View>
    <TextInput />
  </View>
);

AddComment.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default AddComment;
