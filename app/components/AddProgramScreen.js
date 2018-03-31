import React from 'react';
import {Alert, Keyboard, View} from 'react-native';
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
import MainStyles from '../style/MainStyles.js';

export default class AddProgramScreen extends React.Component {
	constructor(props) {
		super(props);
		this.setDataOptions = this.setDataOptions.bind(this);
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

	isCheckedItemsHaveOptions() {
		const data = this.state.data;
		let isValid = true;
		data.forEach(item => {
			if (item.checked && !item.options) {
				Alert.alert(
					'Warning',
					'Please add options to all checked items',
					[{text: 'OK'}],
					{cancelable: false},
				);
				isValid = false;
			}
		});
		return isValid;
	}

	onToolbarRightElementPress = () => {
		if (this.state.programName !== '') {
			if (this.isCheckedItemsHaveOptions()) {
				this.props.navigation.goBack(null);
				this.props.navigation.dispatch(actions.setProgramExists(true));
			}
		} else {
			this.setState({showDialog: true});
		}
	};

	setDataOptions(index, data) {
		const arr = [...this.state.data];
		const newItem = {
			...arr[index],
			options: data,
		};

		arr[index] = newItem;

		this.setState({
			data: arr,
		});
	}

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

	renderOptions(item) {
		if (item.options) {
			return (
				<Text>
					<Text style={styles.itemOptions}>{item.options.sets}x</Text>
					<Text style={styles.itemOptions}>{item.options.repetitions}</Text>
				</Text>
			);
		}
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
							style={MainStyles.greenColor}
							onChangeText={text => this.onInputChangeText(text)}
						/>
						<Icon
							active
							name="arrow-down"
							style={MainStyles.blueColor}
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
										checkedColor={MainStyles.blue}
										uncheckedColor={MainStyles.green}
										containerStyle={styles.checkBox}
										onPress={() => this.onCheckBoxChange(index)}
									/>
									<Body style={styles.itemBody}>
										<Text>{item.key}</Text>
										{this.renderOptions(item)}
									</Body>
									<Right>
										{item.checked ? (
											<Button
												iconRight
												transparent
												style={styles.button}
												onPress={() =>
													this.props.navigation.navigate(
														'AddProgramItemScreen',
														{
															text: item.key,
															setDataOptions: this.setDataOptions,
															itemIndex: index,
														},
													)
												}>
												<Icon name="arrow-forward" style={styles.lightBlue} />
											</Button>
										) : null}
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
