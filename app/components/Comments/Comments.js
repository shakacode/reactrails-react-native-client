import React, { PropTypes } from 'react';
import {
  View,
  ListView,
  ActivityIndicator,
  Text,
 } from 'react-native';
import _ from 'lodash/fp';

import Comment from 'ReactNativeTutorial/app/components/Comment/Comment';
import Button from 'ReactNativeTutorial/app/components/Button/Button';
import withRemoteDataSource from 'ReactNativeTutorial/app/hocs/withRemoteDataSource';
import routes from 'ReactNativeTutorial/app/constants/routes';
import styles from './CommentsStyle';

const Comments = (props) => (
  <View style={styles.container}>
    <View style={styles.refreshContainer}>
      <Button
        onPress={() => props.remoteDataSourceFetch()}
        text="Reload"
      />
      <Button
        onPress={() => props.navigator.push({ path: routes.ADD_COMMENT })}
        text="Add Comment"
      />
    </View>
    <View style={styles.errorContainer}>
      {props.fetchCommentError ?
        <Text style={styles.error}>{props.fetchCommentError}</Text> :
        null}
    </View>

    <ListView
      dataSource={props.dataSource}
      renderRow={(comment) => <Comment {...comment} />}
      enableEmptySections
    />

    <ActivityIndicator
      size="large"
      color="#0000ff"
      style={styles.indicator}
      animating={props.isFetching || props.isSaving}
    />

  </View>
);

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isSaving: PropTypes.bool.isRequired,
  fetchCommentError: PropTypes.string,
  dataSource: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  remoteDataSourceFetch: PropTypes.func.isRequired,
};

export default withRemoteDataSource(_.get('comments'))(Comments);
