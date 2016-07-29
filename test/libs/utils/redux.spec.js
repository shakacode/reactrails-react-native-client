// @flow
import { makeActionCreator, createReducer } from '../../../app/libs/utils/redux';
import { expect } from 'chai';
import Immutable from 'immutable';

describe('redux', () => {
  describe('makeActionCreator', () => {
    it('returns an actions creator with a predefined structure', () => {
      const addTodo = makeActionCreator('ADD_TODO');
      const updateTodo = makeActionCreator('UPDATE_TODO', 'index', 'value');

      expect(addTodo()).to.eql({ type: 'ADD_TODO' });
      expect(updateTodo(1, 'Clean my room')).to.eql({
        type: 'UPDATE_TODO',
        index: 1,
        value: 'Clean my room',
      });
    });
  });

  describe('createReducer', () => {
    it('creates a reducers from a hash of individual reducers functions', () => {
      const $$initialState = Immutable.fromJS([2]);
      const handlers = {
        ADD_ITEM: ($$state: Object) => $$state.push(0),
        INCREASE: ($$state: Object, action: { index: number }) =>
          $$state.update(action.index, (x: number) => x + 1),
      };
      const reducer = createReducer($$initialState, handlers);

      let $$state = reducer($$initialState, { type: 'ADD_ITEM' });
      $$state = reducer($$state, { type: 'ADD_ITEM' });
      $$state = reducer($$state, { type: 'INCREASE', index: 1 });

      expect(reducer($$initialState.toJS(), null)).to.eql($$initialState.toJS());
      expect($$state.toJS()).to.eql([2, 1, 0]);
    });
  });
});
