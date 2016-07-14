import React, { PropTypes } from 'react';
import {
  View,
  ListView,
  Text,
 } from 'react-native';
import _ from 'lodash/fp';

import Comment from '../Comment/Comment';
import Button from '../Button/Button';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
import withRemoteDataSource from '../../hocs/withRemoteDataSource';
import routes from '../../constants/routes';
import styles from './CommentsStyle';

const Comments = (props) => (
  <View style={styles.container}>
    <View style={styles.refreshContainer}>
      <Button
        onPress={() => {
          props.actions.resetErrorState();
          props.remoteDataSourceFetch();
        }}
        text="Reload"
      />
      <Button
        onPress={() => {
          props.actions.resetErrorState();
          props.navigator.push({ path: routes.ADD_COMMENT });
        }}
        text="Add Comment"
      />
    </View>
    <View style={styles.errorContainer}>
      {props.error ?
        <Text style={styles.error}>{props.error}</Text> :
        null}
    </View>

    <ListView
      dataSource={props.dataSource}
      renderRow={(comment) => <Comment {...comment} />}
      enableEmptySections
    />

    <ActivityIndicator animating={props.isFetching} />

  </View>
);

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isSaving: PropTypes.bool.isRequired,
  error: PropTypes.string,
  dataSource: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  remoteDataSourceFetch: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    resetErrorState: PropTypes.func.isRequired,
  }),
};

export default withRemoteDataSource(_.get('comments'))(Comments);
