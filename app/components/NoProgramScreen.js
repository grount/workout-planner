import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import style from '../style/NoProgramScreen.js';

const NoProgramScreen = () => {
	return (
		<View style={style.noProgram}>
			<Text style={{color: 'white'}}> There is no program found</Text>
			<Text style={{color: 'white'}}> Click the + to add one!</Text>
			<TouchableOpacity style={{ margin: 5 }}>
				<View style={style.button}>
					<Text style={{color: 'white'}}>+</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default NoProgramScreen;
