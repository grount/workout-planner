import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import MainScreenReducer from './MainScreenReducer.js';
import { TabNav } from '../navigators/TabNavigator.js';

const AppReducer = combineReducers({
	stackNav: (state, action) => AppNavigator.router.getStateForAction(action, state),
	homeTabs: (state, action) => TabNav.router.getStateForAction(action, state),
	MainScreenReducer
});

export default AppReducer;
