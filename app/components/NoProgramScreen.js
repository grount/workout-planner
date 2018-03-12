import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import style from '../style/NoProgramScreen.js';

export default class NoProgramScreen extends React.Component {	
	render() {
		return (
			<View style={style.noProgram}>
				<Text style={{color: 'white'}}> There is no program found</Text>
				<Text style={{color: 'white'}}> Click the + to add one!</Text>
				<TouchableOpacity 
					onPress={() => this.props.navigation.navigate('addProgramScreen')} 
					style={{ margin: 5 }}>
					<View style={style.button}>
						<Text style={{color: 'white'}}>+</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

