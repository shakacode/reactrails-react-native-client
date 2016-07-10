import React, { Component, PropTypes } from 'react';
import { View, ListView, ActivityIndicator } from 'react-native';

import Comment from '../Comment/Comment';
import styles from './CommentsStyle';

export default class Comments extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { dataSource: ds.cloneWithRows(this.props.comments) };
    this.props.actions.fetchComments();
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({ dataSource: ds.cloneWithRows(nextProps.comments) });
    console.log("Props", nextProps);
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(comment) => <Comment {...comment} />}
          style={styles.container}
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
};
