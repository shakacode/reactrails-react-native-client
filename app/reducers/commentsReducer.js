/* eslint new-cap: 0 */

import Immutable, { Map as $$Map } from 'immutable';
import { createReducer } from '../libs/utils/redux';

import * as actionTypes from '../constants/commentsConstants';

export const $$initialState = Immutable.fromJS({
  $$comments: [],
  fetchCommentError: null,
  submitCommentError: null,
  isFetching: false,
  isSaving: false,
});

export const commentsHandlers = {
  [actionTypes.FETCH_COMMENTS_SUCCESS]($$state: $$Map, action: { comments: Object }) {
    return $$state.merge({
      $$comments: action.comments,
      fetchCommentError: null,
      isFetching: false,
    });
  },

  [actionTypes.FETCH_COMMENTS_FAILURE]($$state: $$Map, action: { error: String }) {
    return $$state.merge({
      fetchCommentError: action.error,
      isFetching: false,
    });
  },

  [actionTypes.SUBMIT_COMMENT_SUCCESS]($$state: $$Map, action: { comment: String }) {
    return $$state.withMutations(state => (
      state
        .updateIn(
          ['$$comments'],
          $$comments => $$comments.unshift(Immutable.fromJS(action.comment))
        )
        .merge({
          submitCommentError: null,
          isSaving: false,
        })
    ));
  },

  [actionTypes.SUBMIT_COMMENT_FAILURE]($$state: $$Map, action: { error: String }) {
    return $$state.merge({
      fetchCommentError: action.error,
      isFetching: false,
    });
  },

  [actionTypes.SET_IS_FETCHING]($$state: $$Map) {
    return $$state.merge({
      isFetching: true,
    });
  },

  [actionTypes.SET_IS_SAVING]($$state: $$Map) {
    return $$state.merge({
      isFetching: false,
    });
  },
};

const commentsReducer = createReducer($$initialState, commentsHandlers);
export default commentsReducer;
