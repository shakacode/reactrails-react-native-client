import { expect } from 'chai';
import * as actionTypes from '../../app/constants/commentsConstants';
import * as actions from '../../app/actions/commentsActionCreators';

describe('commentsActionCreators', () => {
  it('setIsFetching should create SET_IS_FETCHING action', () => {
    expect(actions.setIsFetching()).to.eql(
      { type: actionTypes.SET_IS_FETCHING }
    );
  });
});
