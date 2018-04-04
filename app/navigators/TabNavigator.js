import React from 'react';
import {connect} from 'react-redux';
import {addNavigationHelpers, TabNavigator} from 'react-navigation';
import {addListener} from '../utils/redux';
import MainScreen from '../components/MainScreen.js';
import AddProgram from '../components/AddProgramScreen.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export const TabNav = TabNavigator(
	{
		homeScreen: {
			screen: MainScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Icon name="home" size={25} color={tintColor} />
				),
			},
		},
		tempScreen: {
			screen: AddProgram,
			navigationOptions: {
				title: 'Log',
				tabBarIcon: ({tintColor}) => (
					<Icon name="ban" size={25} color="#FFF" color={tintColor} />
				),
			},
		}, // TODO Remove after test screen not needed.
	},
	{
		tabBarPosition: 'bottom',
		lazy: true,
		swipeEnabled: false,
		tabBarOptions: {
			activeTintColor: '#FFF',
			inactiveTintColor: 'rgba(255,255,255,0.25)',
			style: {
				backgroundColor: '#05668D',
			},
			indicatorStyle: {
				backgroundColor: '#02C39A',
			},
			tabStyle: {
				height: 40,
			},
			showIcon: true,
			showLabel: false,
		},
	},
);

class tabWithNavigator extends React.Component {
	render() {
		const {dispatch, nav} = this.props;
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
	nav: state.homeTabs,
});

export default connect(mapStateToProps)(tabWithNavigator);
