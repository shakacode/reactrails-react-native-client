import React from 'react';
import App from '../../app/App';
import { Text } from 'react-native';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render Welcome to React Native!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find(Text).children().text()).to.equal('Welcome to React Native!');
  });
});
