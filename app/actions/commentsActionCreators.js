import api from '../libs/api';
import * as actionTypes from '../constants/commentsConstants';

export const setIsFetching = () => ({
  type: actionTypes.SET_IS_FETCHING,
});

export const setIsSaving = () => ({
  type: actionTypes.SET_IS_SAVING,
});

export const fetchCommentsSuccess = (data) => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  comments: data.comments,
});

export const fetchCommentsFailure = (error) => ({
  type: actionTypes.FETCH_COMMENTS_FAILURE,
  error,
});

export const submitCommentSuccess = (comment) => ({
  type: actionTypes.SUBMIT_COMMENT_SUCCESS,
  comment,
});

export const submitCommentFailure = (error) => ({
  type: actionTypes.SUBMIT_COMMENT_FAILURE,
  error,
});

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
