import api from '../libs/api';
import * as actionTypes from '../constants/commentsConstants';
import * as reduxUtils from '../libs/utils/redux';

export const setIsFetching = reduxUtils.makeActionCreator(actionTypes.SET_IS_FETCHING);
export const setIsSaving = reduxUtils.makeActionCreator(actionTypes.SET_IS_SAVING);
export const fetchCommentsSuccess =
  reduxUtils.makeActionCreator(actionTypes.FETCH_COMMENTS_SUCCESS, 'comments');
export const fetchCommentsFailure =
  reduxUtils.makeActionCreator(actionTypes.FETCH_COMMENTS_FAILURE, 'error');
export const submitCommentSuccess =
  reduxUtils.makeActionCreator(actionTypes.SUBMIT_COMMENT_SUCCESS, 'comment');
export const submitCommentFailure =
    reduxUtils.makeActionCreator(actionTypes.SUBMIT_COMMENT_SUCCESS, 'error');

export function fetchComments() {
  return dispatch => {
    dispatch(setIsFetching());
    return (
      api
        .fetchEntities()
        .then(response => response.json())
        .then(json => dispatch(fetchCommentsSuccess(json.comments)))
        .catch(error => dispatch(fetchCommentsFailure(error)))
    );
  };
}

export function submitComment(comment) {
  return dispatch => {
    dispatch(setIsSaving());
    return (
      api
        .submitEntity({ comment })
        .then(res => dispatch(submitCommentSuccess(res.data)))
        .catch(error => dispatch(submitCommentFailure(error)))
    );
  };
}
