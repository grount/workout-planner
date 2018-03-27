import React from 'react';
import {ThemeProvider, Toolbar} from 'react-native-material-ui';
import {Text, Body, Card, CardItem, Content, Container} from 'native-base';

export default class AddProgramItemScreen extends React.Component {
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

	render() {
		return (
			<Container>
				<Content>
					<Card>
						<CardItem header>
							<Text>Workout Configurations</Text>
						</CardItem>
						<CardItem>
							<Body>
								<Text> Test </Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
