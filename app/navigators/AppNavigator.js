import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import MainScreen from '../components/MainScreen';
import { addListener } from '../utils/redux';
import tabWithNavigator from './TabNavigator.js';
import AddProgramScreen, { addProgramTabNav } from '../components/AddProgramScreen.js';

export const AppNavigator = StackNavigator({
	HomeStackScreen: {
		screen: tabWithNavigator,
		navigationOptions: {
			title: 'Home',
			header: null
		}
	},
	addProgramScreen: { 
		screen: addProgramTabNav,
		navigationOptions: {
			title: 'Add Program'
		}	
	},
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
	nav: state.stackNav
});

export default connect(mapStateToProps)(AppWithNavigationState);
