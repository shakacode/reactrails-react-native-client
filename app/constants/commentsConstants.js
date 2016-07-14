import _ from 'lodash/fp';

const actions = [
  'FETCH_COMMENTS_REQUEST',
  'FETCH_COMMENTS_SUCCESS',
  'FETCH_COMMENTS_FAILURE',
  'SUBMIT_COMMENT_REQUEST',
  'SUBMIT_COMMENT_SUCCESS',
  'SUBMIT_COMMENT_FAILURE',
  'RESET_ERROR_STATE',
];

export default _.zipObject(actions, actions);
