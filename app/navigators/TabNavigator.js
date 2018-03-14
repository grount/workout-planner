import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';
import MainScreen from '../components/MainScreen.js';
import AddProgram from '../components/AddProgramScreen.js';

export const TabNav = TabNavigator({
	homeScreen: { screen: MainScreen },
	tempScreen: { screen: AddProgram,
		navigationOptions: { title: 'Log'}}, // TODO Remove after test screen not needed.
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

class tabWithNavigator extends React.Component {
	render() {
		const { dispatch, nav } = this.props;
		return (
			<TabNav
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
	nav: state.homeTabs
});

export default connect(mapStateToProps)(tabWithNavigator);
