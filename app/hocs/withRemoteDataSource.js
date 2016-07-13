import React, { PropTypes } from 'react';
import { ListView } from 'react-native';
import _ from 'lodash/fp';

/**
 * Adds remote data source logic to the Component
 *
 * @param selector {function} - selects source data from props
 * @param Component {component} - the lower order component
 *
 * @return {component} - a component wrapped in HOC
 */
const withRemoteDataSource = (selector, Component) => class extends React.Component {

  static propTypes = {
    remoteDataSourceFetch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(selector(nextProps)) });
  }

  componentDidMount() {
    this.props.remoteDataSourceFetch();
  }

  render() {
    return <Component dataSource={this.state.dataSource} {...this.props} />;
  }
};

export default _.curry(withRemoteDataSource);
