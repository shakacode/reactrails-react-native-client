import React, { PropTypes } from 'react';
import _ from 'lodash/fp';

const withAddCommentHandlers = Component => class extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    getState: PropTypes.func.isRequired,
    actions: PropTypes.shape({
      submitCommentRequest: PropTypes.func.isRequired,
      resetErrorState: PropTypes.func.isRequired,
    }),
    error: PropTypes.string,
    isSaving: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    _.bindAll(['addComment', 'cancel'], this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isSaving && !nextProps.isSaving && !nextProps.error) {
      this.props.actions.resetErrorState();
      this.props.navigator.pop();
    }
  }

  addComment() {
    this.props.actions.submitCommentRequest(this.props.getState());
  }

  cancel() {
    this.props.actions.resetErrorState();
    this.props.navigator.pop();
  }

  render() {
    return <Component {...this.props} addComment={this.addComment} cancel={this.cancel} />;
  }
};

export default withAddCommentHandlers;
