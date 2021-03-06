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
import ProgramAdditionalScreen from './ProgramAdditionalScreen.js';
import {View} from 'react-native';
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
						<ListItem style={style.ListItem}>
							<Body style={style.ListItemBody}>
								<View style={style.View}>
									<View>
										<Text>{item.key}</Text>
										<Text note>
											{item.options.sets}x{item.options.repetitions}
										</Text>
									</View>
									<Icon
										style={style.Icon}
										name={item.visible ? 'pause' : 'play'}
										onPress={() => this.onWorkoutItemPress(index)}
									/>
								</View>
								{item.visible ? (
									<ProgramAdditionalScreen
										sets={item.options.sets}
										repetitions={item.options.repetitions}
									/>
								) : null}
							</Body>
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
