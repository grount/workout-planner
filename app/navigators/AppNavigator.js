import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import MainScreen from '../components/MainScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = TabNavigator({
	Main: { screen: MainScreen },
	Test: { screen: MainScreen,
		navigationOptions: { title: 'Log'}}, // TODO Remove after test screen not needed.
	Test2: { screen: MainScreen,
		navigationOptions: { title: 'Personal'}}, 
	},{
	tabBarPosition: 'bottom',
	lazy: true,
	tabBarOptions: {
		style: {
			backgroundColor: '#05668D',
		},
		indicatorStyle: {
			backgroundColor: '#02C39A'
		},
		tabStyle: {
			height: 40,
		}
	}
});

class AppWithNavigationState extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		nav: PropTypes.object.isRequired,
	};

	render() {
		const { dispatch, nav } = this.props;
		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch,
					state: nav,
					addListener,
				})}
			/>
		);
	}
}

const mapStateToProps = state => ({
	nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
