import React from 'react';
import {Alert, Keyboard, View, ActivityIndicator} from 'react-native';
import {
	Button,
	Body,
	Icon,
	Label,
	Item,
	Input,
	Right,
	Content,
	Container,
	Text,
	List,
	ListItem,
} from 'native-base';
import {Toolbar, ThemeProvider} from 'react-native-material-ui';
import {CheckBox} from 'react-native-elements';
import {uiTheme, styles} from '../style/AddProgramScreen.js';
import * as actions from '../actions/MainPageActions';

export default class AddProgramScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			programName: '',
			showDialog: false,
			data: [
				{key: 'Bench Press', header: true, checked: true},
				{key: 'Bench Press1', header: false, checked: false},
				{key: 'Bench Press2', header: false, checked: false},
				{key: 'Bench Press3', header: false, checked: false},
				{key: 'Bench Press4', header: false, checked: false},
				{key: 'Bench Press5', header: false, checked: false},
				{key: 'Bench Press6', header: false, checked: false},
				{key: 'Bench Press7', header: false, checked: false},
				{key: 'Bench Press8', header: false, checked: false},
				{key: 'Bench Press9', header: false, checked: false},
				{key: 'Shoulders', header: true, checked: false},
				{key: 'Shoulders1', header: false, checked: false},
				{key: 'Shoulders2', header: false, checked: false},
				{key: 'Shoulders3', header: false, checked: false},
				{key: 'Shoulders4', header: false, checked: false},
				{key: 'Shoulders5', header: false, checked: false},
				{key: 'Shoulders6', header: false, checked: false},
			],
		};
	}
	static navigationOptions = ({navigation}) => ({
		header: (
			<ThemeProvider uiTheme={uiTheme}>
				<Toolbar
					leftElement="arrow-back"
					onLeftElementPress={() => navigation.goBack(null)}
					centerElement="Add Program"
					rightElement="check"
					onRightElementPress={() =>
						navigation.state.params.onToolbarRightElementPress()
					}
					searchable={{
						autoFocus: true,
						placeholder: 'Search',
						onChangeText: text =>
							navigation.state.params.onToolbarChangeText(text),
					}}
				/>
			</ThemeProvider>
		),
	});

	componentDidMount() {
		this.props.navigation.setParams({
			onToolbarChangeText: this.onToolbarChangeText.bind(this),
			onToolbarRightElementPress: this.onToolbarRightElementPress.bind(this),
		});
	}

	onToolbarRightElementPress = () => {
		if (this.state.programName !== '') {
			this.props.navigation.dispatch(actions.setProgramExists(true));
			this.props.navigation.goBack(null);
		} else {
			this.setState({showDialog: true});
		}
	};

	renderFooter = () => {
		if (!this.state.loading) return null;
		return (
			<View
				style={{
					paddingVertical: 20,
					borderTopWidth: 1,
					borderTopColor: '#CED0CE',
				}}>
				<ActivityIndicator animating size="large" />
			</View>
		);
	};

	/*ListFooterComponent={this.renderFooter} Future loading partial list from server and loading the rest of the list*/

	renderItemHeader(text, isHeader) {
		if (isHeader) {
			return (
				<ListItem itemDivider>
					<Text>{text}</Text>
				</ListItem>
			);
		}
		return null;
	}

	onCheckBoxChange(index) {
		const arr = [...this.state.data];
		const newItem = {
			...arr[index],
			checked: !arr[index].checked,
		};

		arr[index] = newItem;

		this.setState({
			data: arr,
		});
	}

	onToolbarChangeText = text => {
		this.setState({search: text});
	};

	onInputChangeText = text => {
		this.setState({programName: text});
	};

	showDialogAlert() {
		return Alert.alert(
			'Warning',
			'Please enter a program name before pressing the save button',
			[{text: 'OK', onPress: () => this.setState({showDialog: false})}],
			{cancelable: false},
		);
	}

	render() {
		let filteredData = this.state.data.filter(data => {
			return data.key.indexOf(this.state.search) !== -1;
		});
		return (
			<Container ref="containerRef" style={styles.container}>
				{this.state.showDialog ? this.showDialogAlert() : null}
				<Content>
					<Item inlineLabel rounded>
						<Label style={styles.label}>Program Name:</Label>
						<Input
							style={styles.lightGreen}
							onChangeText={text => this.onInputChangeText(text)}
						/>
						<Icon
							active
							name="arrow-down"
							style={styles.lightBlue}
							onPress={Keyboard.dismiss}
						/>
					</Item>
					<List
						dataArray={filteredData}
						renderRow={(item, sectionId, index) => (
							<View>
								{this.renderItemHeader(item.key, item.header)}
								<ListItem>
									<CheckBox
										checked={item.checked}
										checkedIcon="check"
										checkedColor="#05668D"
										uncheckedColor="#02C39A"
										containerStyle={styles.checkBox}
										onPress={() => this.onCheckBoxChange(index)}
									/>
									<Body>
										<Text>{item.key}</Text>
									</Body>
									<Right>
										<Button
											iconRight
											transparent
											style={styles.button}
											onPress={() => console.log('123')}>
											<Icon name="arrow-forward" style={styles.lightBlue} />
										</Button>
									</Right>
								</ListItem>
							</View>
						)}
					/>
				</Content>
			</Container>
		);
	}
}
