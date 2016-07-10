import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';

import Comment from '../Comment/Comment';

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
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(comment) => <Comment {...comment} />}
      />
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};
