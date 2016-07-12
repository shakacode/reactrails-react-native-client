import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../libs/api';
import * as actionTypes from '../constants/commentsConstants';

function* fetchComments() {
  try {
    const responsePromise = yield call(api.fetchEntities);
    const { comments } = yield call(() => responsePromise.json());
    yield put({ type: actionTypes.FETCH_COMMENTS_SUCCESS, comments });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_COMMENTS_FAILURE, error: e.message });
  }
}

export default function* saga() {
  yield* takeLatest(actionTypes.FETCH_COMMENTS_REQUEST, fetchComments);
}
