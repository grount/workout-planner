import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NoProgramScreen = () => {
	return (
		<View style={styles.noProgram}>
			<Text style={{color: 'white'}}> There is no program found</Text>
			<Text style={{color: 'white'}}> Click the + to add one!</Text>
			<TouchableOpacity style={{ margin: 5 }}>
				<View style={styles.button}>
					<Text style={{color: 'white'}}>+</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
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

export default NoProgramScreen;
