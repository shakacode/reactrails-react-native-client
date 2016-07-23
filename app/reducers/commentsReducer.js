// @flow
/* eslint new-cap: 0 */

import Immutable, { Map as $$Map } from 'immutable';
import { createReducer } from 'ReactNativeTutorial/app/libs/utils/redux';

import actionTypes from 'ReactNativeTutorial/app/constants/commentsConstants';

export const $$initialState = Immutable.fromJS({
  $$comments: [],
  error: null,
  submitCommentError: null,
  isFetching: false,
  isSaving: false,
});

export const commentsHandlers = {
  [actionTypes.FETCH_COMMENTS_SUCCESS]($$state: $$Map, action: { comments: Object }) {
    return $$state.merge({
      $$comments: action.comments,
      error: null,
      isFetching: false,
    });
  },

  [actionTypes.FETCH_COMMENTS_FAILURE]($$state: $$Map, action: { error: String }) {
    return $$state.merge({
      error: action.error,
      isFetching: false,
    });
  },

  [actionTypes.SUBMIT_COMMENT_SUCCESS]($$state: $$Map, action: { comment: Object }) {
    return $$state.withMutations((state: $$Map) => (
      state
        .updateIn(
          ['$$comments'],
          ($$comments: Object) => $$comments.unshift(Immutable.fromJS(action.comment))
        )
        .merge({
          error: null,
          isSaving: false,
        })
    ));
  },

  [actionTypes.SUBMIT_COMMENT_FAILURE]($$state: $$Map, action: { error: String }) {
    return $$state.merge({
      error: action.error,
      isSaving: false,
    });
  },

  [actionTypes.FETCH_COMMENTS_REQUEST]($$state: $$Map) {
    return $$state.merge({
      isFetching: true,
    });
  },

  [actionTypes.SUBMIT_COMMENT_REQUEST]($$state: $$Map) {
    return $$state.merge({
      isSaving: true,
    });
  },

  [actionTypes.RESET_ERROR_STATE]($$state: $$Map) {
    return $$state.merge({
      error: null,
    });
  },
};

const commentsReducer = createReducer($$initialState, commentsHandlers);
export default commentsReducer;
