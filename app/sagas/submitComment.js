import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../libs/api';
import * as actionTypes from '../constants/commentsConstants';

export function* submitComment(action) {
  try {
    const responsePromise = yield call(() => api.submitEntity({ comment: action.comment }));
    const { comment, error } = yield call(() => responsePromise.json());
    if (error) throw error;
    yield put({ type: actionTypes.SUBMIT_COMMENT_SUCCESS, comment });
  } catch (e) {
    yield put({ type: actionTypes.SUBMIT_COMMENT_FAILURE, error: e.message || e });
  }
}

export default function* saga() {
  yield* takeEvery(actionTypes.SUBMIT_COMMENT_REQUEST, submitComment);
}
