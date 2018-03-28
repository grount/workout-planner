import React from 'react';
import {ThemeProvider, Toolbar} from 'react-native-material-ui';
import {
	Header,
	Text,
	Body,
	Card,
	CardItem,
	Content,
	Container,
} from 'native-base';
import NumericInput, {calcSize} from 'react-native-numeric-input';

export default class AddProgramItemScreen extends React.Component {
	constructor(props) {
		super(props);
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

	renderNumericInput() {
		return (
			<NumericInput
				totalWidth={calcSize(140)}
				totalHeight={calcSize(60)}
				onChange={console.log('123')}
				textColor="#03C39A"
				iconStyle={{color: '#05668D'}}
				rounded
			/>
		);
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
								{this.renderNumericInput()}
							</Body>
						</CardItem>
						<CardItem>
							<Body>
								<Text> Repetitions: </Text>
								{this.renderNumericInput()}
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
