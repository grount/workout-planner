import React from 'react';
import {connect} from 'react-redux';
import {
	Container,
	Content,
	List,
	ListItem,
	Icon,
	Text,
	Body,
	Right,
} from 'native-base';
import NoProgramScreen from './NoProgramScreen.js';
import style from '../style/MainScreen.js';
import * as actions from '../actions/MainPageActions';

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

	renderWorkoutList() {
		const program = this.props.mainScreen.get('program').toJS();
		return (
			<Content>
				<List
					dataArray={program.workout}
					renderRow={(item, sectionId, index) => (
						<ListItem
							style={{
								backgroundColor: 'white',
								marginLeft: 0,
								marginBottom: 5,
							}}>
							<Body
								style={{
									marginLeft: 10,
								}}>
								<Text>{item.key}</Text>
								<Text note>
									{item.options.sets}x{item.options.repetitions}
								</Text>
								{item.visible ? <Text> TEST </Text> : null}
							</Body>
							<Right style={{marginRight: 10}}>
								<Icon name={item.visible ? 'pause': 'play'} onPress={ () => this.onWorkoutItemPress(index)} />
							</Right>
						</ListItem>
					)}
				/>
			</Content>
		);
	}

	onWorkoutItemPress(index) {
		// TODO if you start a specific exercise and press play on other stop the first exercise aka "pause" icon.
		this.props.navigation.dispatch(actions.toggleWorkoutItemDisplay(index));
	}
}

const mapStateToProps = state => ({
	mainScreen: state.MainScreenReducer,
});

export default connect(mapStateToProps)(MainScreen);
