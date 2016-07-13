import React, { PropTypes } from 'react';
import { Text, View, TextInput } from 'react-native';
import _ from 'lodash/fp';

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
    <Text>Author</Text>
    <TextInput
      onChangeText={(text) => props.updateState({ author: text })}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
    <Text>Comment</Text>
    <TextInput
      onChangeText={(text) => props.updateState({ comment: text })}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />

  </View>
);

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default _.compose(withFormState, withAddCommentHandlers)(AddComment);
