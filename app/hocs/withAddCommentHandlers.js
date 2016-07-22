// @flow
import React, {PropTypes} from 'react';
import _ from 'lodash/fp';

const withAddCommentHandlers = (
  Component: ReactClass
):ReactClass<{}> => class extends React.Component {
  constructor(
    props: {navigator:Object,
      getState:Function,
      actions:{ submitCommentRequest:Function,
        resetErrorState:Function},
      error:string,
      isSaving:bool}) {
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
    return <Component {...this.props} addComment={this.addComment} cancel={this.cancel}/>;
  }
};

export default withAddCommentHandlers;
