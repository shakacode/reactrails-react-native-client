import { expect } from 'chai';
import { fetchComments } from '../../app/sagas/fetchComments';
import actionTypes from '../../app/constants/commentsConstants';
import { put } from 'redux-saga/effects';

describe('fetchComments', () => {
  context('Normal network connection', () => {
    it('calls FETCH_COMMENTS_SUCCESS with a set of comments', () => {
      const iterator = fetchComments();
      iterator.next();
      iterator.next();
      const effect = iterator.next(
          { comments:
            ['comment1', 'comment2'],
          },
      ).value;
      expect(effect).to.deep.equal(
        put({
          type: actionTypes.FETCH_COMMENTS_SUCCESS,
          comments: ['comment1', 'comment2'],
        })
      );
    });
  });

  context('Failing network connection', () => {
    it('Calls FETCH_COMMENTS_FAILURE with a error message', () => {
      const iterator = fetchComments();
      iterator.next();
      const effect = iterator.throw({ message: 'Error message' }).value;
      expect(effect).to.deep.equal(
        put({
          type: actionTypes.FETCH_COMMENTS_FAILURE,
          error: 'Error message',
        })
      );
    });
  });
});
