import AddProgramScreen from '../components/AddProgramScreen.js';
import { TabNavigator } from 'react-navigation';

const addProgramTabNav = TabNavigator({
	addProg: { 
		screen: AddProgramScreen,
		navigationOptions: {
			title: 'Add Program',
		},
	},
	customize: { screen: AddProgramScreen },
}, {
	lazy: true,
	swipeEnabled: false,
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
	},
})

export default addProgramTabNav;
