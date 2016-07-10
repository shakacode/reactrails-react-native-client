import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as commentsActions from '../actions/commentsActionCreators';
import Comments from '../components/Comments/Comments';

const CommentsContainer = (props) => (
  <Comments {...props} />
);

const mapStateToProps = state => ({
  comments: state.$$commentsStore.get('$$comments').toJS(),
  isFetching: state.$$commentsStore.get('isFetching'),
  fetchCommentError: state.$$commentsStore.get('fetchCommentError') &&
    state.$$commentsStore.get('fetchCommentError').message,
});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(commentsActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
