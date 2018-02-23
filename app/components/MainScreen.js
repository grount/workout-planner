import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import NoProgramScreen from './NoProgramScreen.js';

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
			<View style={styles.container}>
				<View style={styles.mainContent}>
					{this.noProgramFound ? <NoProgramScreen/> : null}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column'
	},
	mainContent: {
		flex: 1,
		backgroundColor: '#F1F2E6',
		justifyContent: 'center',
		alignItems: 'center',
	},
	navBar: {
		flex: .06,
		backgroundColor: '#05668D'
	},
	noProgram: {
		marginTop: 20,
		width: '80%',
		height: '90%',
		backgroundColor: '#02C39A',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#02C39A',
		borderRadius: 25,
	},
	button: {
		backgroundColor: '#028090',
		borderWidth: 0.5,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		width: 30,
		height: 30,
	}

});

const mapStateToProps = state => ({
	mainScreen: state.MainScreenReducer
});

export default connect(mapStateToProps)(MainScreen);
