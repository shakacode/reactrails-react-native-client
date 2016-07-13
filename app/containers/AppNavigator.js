import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';
import _ from 'lodash/fp';

import routes from '../constants/routes';
import Comments from '../components/Comments/Comments';
import AddComment from '../components/AddComment/AddComment';

export default class AppNavigator extends Component {

  constructor(props) {
    super(props);
    _.bindAll(['renderScene'], this);
  }

  renderScene(route, navigator) {
    switch (route.path) {
      case routes.COMMENTS:
        return (
          <Comments
            navigator={navigator}
            {...this.props}
            remoteDataSourceFetch={this.props.actions.fetchCommentsRequest}
          />
        );
      case routes.ADD_COMMENT:
        return <AddComment navigator={navigator} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ path: routes.COMMENTS }}
        renderScene={this.renderScene}
      />
    );
  }
}

AppNavigator.propTypes = {
  actions: PropTypes.shape({
    fetchCommentsRequest: PropTypes.func.isRequired,
  }),
};
