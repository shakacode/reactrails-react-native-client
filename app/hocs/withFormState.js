import React from 'react';
import _ from 'lodash/fp';

const withFormState = Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    _.bindAll(['updateState', 'resetState', 'getState'], this);
  }

  updateState(value) {
    this.setState({ ...this.state, ...value });
  }

  resetState() {
    this.setState({});
  }

  getState() {
    return this.state;
  }

  render() {
    return (
      <Component
        {...this.props}
        updateState={this.updateState}
        resetState={this.resetState}
        getState={this.getState}
      />
    );
  }
};

export default withFormState;
