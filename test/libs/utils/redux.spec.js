import { makeActionCreator } from '../../../app/libs/utils/redux';
import { expect } from 'chai';

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
});
