import { expect } from 'chai';
import { submitComment } from '../../app/sagas/submitComment';
import * as actionTypes from '../../app/constants/commentsConstants';
import { put } from 'redux-saga/effects';

describe('submitComment', () => {
  context('Normal network connection', () => {
    it('calls SUBMIT_COMMENTS_SUCCESS with a saved comment', () => {
      const iterator = submitComment();
      const response = {
        comment:
        {
          author: 'Dave',
          comment: 'Hi',
        },
      };
      iterator.next();
      iterator.next();
      const effect = iterator.next(response).value;
      expect(effect).to.deep.equal(
        put({
          type: actionTypes.SUBMIT_COMMENT_SUCCESS,
          comment: response.comment,
        })
      );
    });
  });

  context('Failing network connection', () => {
    it('Calls FETCH_COMMENTS_FAILURE with a error message', () => {
      const iterator = submitComment();
      iterator.next();
      const effect = iterator.throw({ message: 'Error message' }).value;
      expect(effect).to.deep.equal(
        put({
          type: actionTypes.SUBMIT_COMMENT_FAILURE,
          error: 'Error message',
        })
      );
    });
  });
});
