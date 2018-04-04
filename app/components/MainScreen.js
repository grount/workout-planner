import React from 'react';
import {connect} from 'react-redux';
import {Container, Content, List, ListItem, Text, Body} from 'native-base';
import NoProgramScreen from './NoProgramScreen.js';
import style from '../style/MainScreen.js';

class MainScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: 'Home Screen',
		headerStyle: {
			backgroundColor: '#05668D',
		},
		headerTintColor: '#fff',
	};

	renderWorkoutList() {
		const program = this.props.mainScreen.get('workout');

		return (
			<Content>
				<List
					dataArray={program.workout}
					renderRow={item => (
						<ListItem style={{backgroundColor: 'white', marginLeft: 0, marginBottom: 5}}>
							<Body
								style={{
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<Text>{item.key}</Text>
								<Text note>
									{item.options.sets}x{item.options.repetitions}
								</Text>
							</Body>
						</ListItem>
					)}
				/>
			</Content>
		);
	}

	render() {
		const isProgramExists = this.props.mainScreen.get('isProgramExists');
		return (
			<Container style={style.container}>
				{isProgramExists ? null : (
					<Container style={style.mainContent}>
						<NoProgramScreen navigation={this.props.navigation} />
					</Container>
				)}
				{!isProgramExists ? null : this.renderWorkoutList()}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	mainScreen: state.MainScreenReducer,
});

export default connect(mapStateToProps)(MainScreen);
