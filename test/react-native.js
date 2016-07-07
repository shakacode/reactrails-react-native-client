import React from 'react';

const ReactNative = React;

export const PropTypes = React.PropTypes;

export const StyleSheet = {
  create: (style) => style,
};

const createMockComponent = displayName => {
  const MockComponent = props => <div {...props}>{props.children}</div>;
  MockComponent.displayName = displayName;
  MockComponent.propTypes = {
    children: React.PropTypes.node,
  };
  return MockComponent;
};

export const ListView = createMockComponent('ListView');
export const Text = createMockComponent('Text');
export const TouchableOpacity = createMockComponent('TouchableOpacity');
export const View = createMockComponent('View');

export default ReactNative;
