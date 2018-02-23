import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import NoProgramScreen from './NoProgramScreen.js';
import style from '../style/MainScreen.js';

class MainScreen extends React.Component {
	constructor(props) {
		super(props);

			this.noProgramFound = this.props.mainScreen.program === null;
	}
	static navigationOptions = {
		title: 'Home Screen',
		headerStyle: {
			backgroundColor: '#05668D'
		},
		headerTintColor: '#fff'
	};

	addProgramPage() {
	
	}

	render() {
		return (
			<View style={style.container}>
				<View style={style.mainContent}>
					{this.noProgramFound ? <NoProgramScreen/> : null}
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	mainScreen: state.MainScreenReducer
});

export default connect(mapStateToProps)(MainScreen);
