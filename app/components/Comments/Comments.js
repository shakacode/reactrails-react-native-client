import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  ActivityIndicator,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  Text,
 } from 'react-native';

import Comment from '../Comment/Comment';
import styles from './CommentsStyle';

export default class Comments extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { dataSource: ds.cloneWithRows(this.props.comments) };
  }

  componentDidMount() {
    this.props.actions.fetchCommentsRequest();
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({ dataSource: ds.cloneWithRows(nextProps.comments) });
  }

  renderError() {
    return this.props.fetchCommentError ?
      <Text style={styles.error}>{this.props.fetchCommentError}</Text> :
      null;
  }

  render() {
    const TouchableElement = Platform.OS === 'android' ?
      TouchableNativeFeedback :
      TouchableHighlight;
    return (
      <View style={styles.container}>
        <View style={styles.refreshContainer}>
          <TouchableElement
            onPress={() => this.props.actions.fetchCommentsRequest()}
          >
            <View>
              <Text style={styles.refresh}>Reload</Text>
            </View>
          </TouchableElement>
        </View>
        <View style={styles.errorContainer}>
          {this.renderError()}
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(comment) => <Comment {...comment} />}
          enableEmptySections
        />
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.indicator}
          animating={this.props.isFetching}
        />
      </View>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchCommentError: PropTypes.string,
  actions: PropTypes.shape({
    fetchCommentsRequest: PropTypes.func.isRequired,
  }),
};
