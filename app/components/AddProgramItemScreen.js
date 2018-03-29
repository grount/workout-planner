import React from 'react';
import {TextInput} from 'react-native';
import {ThemeProvider, Toolbar} from 'react-native-material-ui';
import {Text, Body, Card, CardItem, Content, Container} from 'native-base';
import Styles from '../style/AddProgramItemScreen.js';

export default class AddProgramItemScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			repetitions: '1',
			sets: '1',
		};
	}
	static navigationOptions = ({navigation}) => ({
		header: (
			<ThemeProvider>
				<Toolbar
					leftElement="arrow-back"
					onLeftElementPress={() => navigation.goBack()}
					centerElement="Options"
					rightElement="save"
					onRightElementPress={() => null}
				/>
			</ThemeProvider>
		),
	});

	onChangeSetInput(text) {
		const newText = this.onChangeInput(text);
		this.setState({sets: newText});
	}

	onChangeRepetitionsInput(text) {
		const newText = this.onChangeInput(text);
		this.setState({repetitions: newText});
	}

	onChangeInput(text) {
		let newText = '';
		let numbers = '0123456789';

		for (var i = 0; i < text.length; i++) {
			if (numbers.indexOf(text[i]) > -1) {
				newText = newText + text[i];
			} else {
				alert('please enter numbers only');
			}
		}
		return newText;
	}

	render() {
		return (
			<Container>
				<Content>
					<Card>
						<CardItem header>
							<Text>Workout Configurations</Text>
						</CardItem>
						<CardItem>
							<Text>{this.props.navigation.state.params.text}:</Text>
						</CardItem>
						<CardItem>
							<Body>
								<Text> Sets: </Text>
								<TextInput
									style={Styles.textInput}
									keyboardType="numeric"
									value={this.state.sets}
									maxLength={3}
									onChangeText={text => this.onChangeSetInput(text)}
								/>
							</Body>
						</CardItem>
						<CardItem>
							<Body>
								<Text> Repetitions: </Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
