import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppNavigator from './AppNavigator';
import * as commentsActions from '../actions/commentsActionCreators';

const ReduxContainer = (props) => <AppNavigator {...props} />;

ReduxContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  actions: PropTypes.shape({
    fetchCommentsRequest: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = state => ({
  comments: state.$$commentsStore.get('$$comments').toJS(),
  isFetching: state.$$commentsStore.get('isFetching'),
  isSaving: state.$$commentsStore.get('isSaving'),
  error: state.$$commentsStore.get('error'),
});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(commentsActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer);
