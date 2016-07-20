import React, { PropTypes } from 'react';
import { Text, View, TextInput } from 'react-native';
import _ from 'lodash/fp';

import withFormState from 'ReactNativeTutorial/app/hocs/withFormState';
import withAddCommentHandlers from 'ReactNativeTutorial/app/hocs/withAddCommentHandlers';
import Button from 'ReactNativeTutorial/app/components/Button/Button';
import styles from './AddCommentStyles';

const AddComment = (props) => (
  <View style={styles.container}>
    <View style={styles.buttonsContainer}>
      <Button onPress={props.addComment} text="Add Comment" />
      <Button onPress={props.cancel} text="Back" />
    </View>
    <Text>Author</Text>
    <TextInput
      onChangeText={(text) => props.updateState({ author: text })}
      value={props.getState().author}
      style={styles.input}
    />
    <Text>Comment</Text>
    <TextInput
      onChangeText={(text) => props.updateState({ comment: text })}
      value={props.getState().comment}
      style={styles.input}
    />

  </View>
);

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
};

export default _.compose(withFormState, withAddCommentHandlers)(AddComment);
