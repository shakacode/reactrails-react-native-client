import React, { PropTypes } from 'react';
import { Text, View, TextInput } from 'react-native';
import _ from 'lodash/fp';

import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
import withFormState from '../../hocs/withFormState';
import withAddCommentHandlers from '../../hocs/withAddCommentHandlers';
import Button from '../Button/Button';
import styles from './AddCommentStyles';

const AddComment = (props) => (
  <View style={styles.container}>
    <View style={styles.buttonsContainer}>
      <Button onPress={props.addComment} text="Add Comment" />
      <Button onPress={props.cancel} text="Back" />
    </View>
    <View style={styles.errorContainer}>
      {props.error ?
        <Text style={styles.error}>{props.error}</Text> :
        null}
    </View>
    <Text>Author</Text>
    <TextInput
      onChangeText={(text) => props.updateState({ author: text })}
      value={props.getState().author}
      style={styles.input}
    />
    <Text>Comment</Text>
    <TextInput
      onChangeText={(text) => props.updateState({ text })}
      value={props.getState().comment}
      style={styles.input}
    />
    <ActivityIndicator animating={props.isSaving} />
  </View>
);

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default _.compose(withFormState, withAddCommentHandlers)(AddComment);
