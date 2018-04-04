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
			program: {
				name: '',
				workout: [],
			},
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
		if (this.state.program.name !== '') {
			if (this.isCheckedItemsHaveOptions() && this.isAtLeastOneCheckedItem()) {
				this.addProgramItems(); // TODO Consider redesign
				this.props.navigation.dispatch(actions.setProgramExists(true));
				this.props.navigation.dispatch(actions.addProgram(this.state.program));
				this.props.navigation.goBack(null);
			}
		} else {
			this.setState({showDialog: true});
		}
	};

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

	isAtLeastOneCheckedItem() {
		const data = this.state.data;
		let isValid = false;
		data.forEach(item => {
			if (item.checked && item.options) isValid = true;
		});

		if (!isValid)
			Alert.alert(
				'Warning',
				'Workout program must contain at least one exercise',
				[{text: 'OK'}],
				{cancelable: false},
			);

		return isValid;
	}

	addProgramItems() {
		const data = this.state.data;
		let program = this.state.program;

		data.forEach(item => {
			if (item.checked)
				program.workout.push({key: item.key, options: item.options});
		});

		this.setState({program});
	}

	onToolbarChangeText = text => {
		this.setState({search: text});
	};

	render() {
		let filteredData = this.state.data.filter(data => {
			return data.key.indexOf(this.state.search) !== -1;
		});
		return (
			<Container ref="containerRef" style={styles.container}>
				{this.state.showDialog ? this.showDialogAlert() : null}
				{this.renderProgramNameHeader()}
				<Content>{this.renderList(filteredData)}</Content>
			</Container>
		);
	}

	showDialogAlert() {
		return Alert.alert(
			'Warning',
			'Please enter a program name before pressing the save button',
			[{text: 'OK', onPress: () => this.setState({showDialog: false})}],
			{cancelable: false},
		);
	}

	renderProgramNameHeader() {
		return (
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
		);
	}

	onInputChangeText = text => {
		this.setState(prevState => ({
			program: {
				...prevState.program,
				name: text,
			},
		}));
	};

	renderList(filteredData) {
		return (
			<List
				dataArray={filteredData}
				renderRow={(item, sectionId, index) => (
					<View>
						{this.renderItemHeader(item.key, item.header)}
						<ListItem>
							{this.renderItemCheckBox(item, index)}
							<Body style={styles.itemBody}>
								<Text>{item.key}</Text>
								{this.renderOptions(item)}
							</Body>
							<Right>
								{item.checked ? this.renderItemButton(item, index) : null}
							</Right>
						</ListItem>
					</View>
				)}
			/>
		);
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

	renderItemCheckBox(item, index) {
		return (
			<CheckBox
				checked={item.checked}
				checkedIcon="check"
				checkedColor={MainStyles.blue}
				uncheckedColor={MainStyles.green}
				containerStyle={styles.checkBox}
				onPress={() => this.onCheckBoxChange(index)}
			/>
		);
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

	renderOptions(item) {
		if (item.options) {
			return (
				<Text>
					<Text note>{item.options.sets}x</Text>
					<Text note>{item.options.repetitions}</Text>
				</Text>
			);
		}
	}

	renderItemButton(item, index) {
		return (
			<Button
				iconRight
				transparent
				style={styles.button}
				onPress={() =>
					this.props.navigation.navigate('AddProgramItemScreen', {
						text: item.key,
						setDataOptions: this.setDataOptions,
						itemIndex: index,
					})
				}>
				<Icon name="arrow-forward" style={styles.lightBlue} />
			</Button>
		);
	}


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
}
