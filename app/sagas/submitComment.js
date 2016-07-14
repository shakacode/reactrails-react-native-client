import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../libs/api';
import actionTypes from '../constants/commentsConstants';
import errors from '../constants/errors';

export function* submitComment(action) {
  try {
    const responsePromise = yield call(() => api.submitEntity({ comment: action.comment }));
    const comment = yield call(() => responsePromise.json());
    if (comment.error) throw comment.error;
    if (!comment.hasOwnProperty('author') || !comment.hasOwnProperty('text')) {
      throw errors.UNEXPECTED_SERVER_RESPONSE;
    }
    yield put({ type: actionTypes.SUBMIT_COMMENT_SUCCESS, comment });
  } catch (e) {
    yield put({ type: actionTypes.SUBMIT_COMMENT_FAILURE, error: e.message || e });
  }
}

export default function* saga() {
  yield* takeEvery(actionTypes.SUBMIT_COMMENT_REQUEST, submitComment);
}
