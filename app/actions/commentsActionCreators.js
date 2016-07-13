import * as actionTypes from '../constants/commentsConstants';
import * as reduxUtils from '../libs/utils/redux';

export const fetchCommentsRequest =
  reduxUtils.makeActionCreator(actionTypes.FETCH_COMMENTS_REQUEST);

export const submitCommentRequest =
  reduxUtils.makeActionCreator(actionTypes.SUBMIT_COMMENT_REQUEST);

export const fetchCommentsSuccess =
  reduxUtils.makeActionCreator(actionTypes.FETCH_COMMENTS_SUCCESS, 'comments');

export const fetchCommentsFailure =
  reduxUtils.makeActionCreator(actionTypes.FETCH_COMMENTS_FAILURE, 'error');

export const submitCommentSuccess =
  reduxUtils.makeActionCreator(actionTypes.SUBMIT_COMMENT_SUCCESS, 'comment');

export const submitCommentFailure =
  reduxUtils.makeActionCreator(actionTypes.SUBMIT_COMMENT_FAILURE, 'error');
