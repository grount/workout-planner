import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import MainScreenReducer from './MainScreenReducer.js';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
	let nextState;
	switch(action.type) {
	default:
		nextState = AppNavigator.router.getStateForAction(action, state);
		break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
}

const AppReducer = combineReducers({
	nav,
	MainScreenReducer
});

export default AppReducer;
