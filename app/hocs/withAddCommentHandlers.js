import React, { PropTypes } from 'react';
import _ from 'lodash/fp';

const withAddCommentHandlers = Component => class extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    getState: PropTypes.func.isRequired,
    actions: PropTypes.shape({
      submitCommentRequest: PropTypes.func.isRequired,
    }),
  }

  constructor(props) {
    super(props);
    _.bindAll(['addComment', 'cancel'], this);
  }

  addComment() {
    this.props.actions.submitCommentRequest(this.props.getState());
    this.props.navigator.pop();
  }

  cancel() {
    this.props.navigator.pop();
  }

  render() {
    return <Component {...this.props} addComment={this.addComment} cancel={this.cancel} />;
  }
};

export default withAddCommentHandlers;
