import api from '../libs/api';
import * as actionTypes from '../constants/commentsConstants';

export function setIsFetching() {
  return {
    type: actionTypes.SET_IS_FETCHING,
  };
}

export function setIsSaving() {
  return {
    type: actionTypes.SET_IS_SAVING,
  };
}

export function fetchCommentsSuccess(data) {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    comments: data.comments,
  };
}

export function fetchCommentsFailure(error) {
  return {
    type: actionTypes.FETCH_COMMENTS_FAILURE,
    error,
  };
}

export function submitCommentSuccess(comment) {
  return {
    type: actionTypes.SUBMIT_COMMENT_SUCCESS,
    comment,
  };
}

export function submitCommentFailure(error) {
  return {
    type: actionTypes.SUBMIT_COMMENT_FAILURE,
    error,
  };
}

export function fetchComments() {
  return dispatch => {
    dispatch(setIsFetching());
    return (
      api
        .fetchEntities()
        .then(response => response.json())
        .then(json => dispatch(fetchCommentsSuccess(json)))
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
