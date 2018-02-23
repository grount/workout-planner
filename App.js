import React from 'react';
import { Provider } from 'react-redux';
import configStore from './app/store/configStore';
import AppWithNavigationState from './app/navigators/AppNavigator.js';

const store = configStore();

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
