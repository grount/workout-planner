import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import MainScreen from '../components/MainScreen';
import { addListener } from '../utils/redux';
import tabWithNavigator from './TabNavigator.js';
import AddProgramScreen from '../components/AddProgramScreen.js';
import addProgramTabNav from '../navigators/AddProgramTabNav.js';

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
			title: 'Add Program',
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: '#05668D',
				shadowOpacity: 0,
				shadowOffset: {
					height: 0
				},
				shadowRadius: 0,
				elevation: 0,
				height: 45
			}
		}	
	},
},
	{
		cardStyle: {
			paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
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
	nav: state.stackNav
});

export default connect(mapStateToProps)(AppWithNavigationState);
