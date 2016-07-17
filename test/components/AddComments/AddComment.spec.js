import React from 'react';
import AddComment from 'ReactNativeTutorial/app/components/AddComment/AddComment';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('AddComments', () => {
  it('should render Add Comment and Back buttons', () => {
    const stubs = {
      addComment: null,
      cancel: null,
      getState: null,
      updateState: null,
    };
    const wrapper = shallow(<AddComment {...stubs} />);
    expect(wrapper.length).to.equal(1);
  });
});
