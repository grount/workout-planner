import { StackNavigator } from 'react-navigation';
import { AppNavigator } from './AppNavigator.js';

const stackNav = StackNavigator({
	Main : {
		screen: AppNavigator
	}
});

export default stackNav;
