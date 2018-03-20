import React from 'react'; 
import { View, FlatList, ActivityIndicator } from 'react-native';
import { TabNavigator, NavigationActions } from 'react-navigation';
import { Left, Right, Content, Container, Text, List, ListItem, Separator } from 'native-base';
import { Toolbar, ThemeProvider } from 'react-native-material-ui';
import { CheckBox } from 'react-native-elements';

export default class AddProgramScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			loading: false,
			data: [
				{ key: 'Bench Press', header: true, checked: true},
				{ key: 'Bench Press1', header: false, checked: false},
				{ key: 'Bench Press2', header: false, checked: false},
				{ key: 'Bench Press3', header: false, checked: false},
				{ key: 'Bench Press4', header: false, checked: false},
				{ key: 'Bench Press5', header: false, checked: false},
				{ key: 'Bench Press6', header: false, checked: false},
				{ key: 'Bench Press7', header: false, checked: false},
				{ key: 'Bench Press8', header: false, checked: false},
				{ key: 'Bench Press9', header: false, checked: false},
				{ key: 'Shoulders', header: true, checked: false},
				{ key: 'Shoulders1', header: false, checked: false},
				{ key: 'Shoulders2', header: false, checked: false},
				{ key: 'Shoulders3', header: false, checked: false},
				{ key: 'Shoulders4', header: false, checked: false},
				{ key: 'Shoulders5', header: false, checked: false},
				{ key: 'Shoulders6', header: false, checked: false},
			],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false
		};
	}

	 static navigationOptions = ({navigation}) => ({
		header: <ThemeProvider uiTheme={uiTheme}>
		<Toolbar
		leftElement="arrow-back"
		onLeftElementPress={() => navigation.goBack(null)}
		centerElement="Add Program"
		searchable={{
			autoFocus: true,
			placeholder: 'Search',
			onChangeText: (text) => navigation.state.params.onToolbarChangeText(text)
		}}
		/>
		</ThemeProvider>
	});

	componentDidMount() {
		this.props.navigation.setParams({
			onToolbarChangeText: this.onToolbarChangeText.bind(this)
		})
	}

	renderFooter = () => {
		if (!this.state.loading) return null;
		return (
			<View style={{paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#CED0CE'}}>
				<ActivityIndicator animating size="large" />
			</View>
		)	
	};

	/*ListFooterComponent={this.renderFooter} Future loading partial list from server and loading the rest of the list*/

	renderItemHeader(text, isHeader){
		if (isHeader) {
			return (
				<ListItem itemDivider>
					<Text>{text}</Text>
				</ListItem>
			)
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
			data: arr
		})
	}

	onToolbarChangeText = (text) => {
		this.setState({search: text})
	}

	render() {
		let filteredData = this.state.data.filter(
			(data) => {
				console.log(data);
				console.log(this.state.search);
				return data.key.indexOf(this.state.search) !== -1;
			}	
		);
		return (
			<Container style={styles.container}>
				<Content>
					<List dataArray={filteredData}
						renderRow={(item, sectionId, index) =>
								<View>
									{this.renderItemHeader(item.key, item.header)}
									<ListItem>
										<CheckBox 
											checked={item.checked}
											checkedIcon='check'
											checkedColor='#05668D'
											uncheckedColor='#02C39A'
											containerStyle={{backgroundColor: '#FFF', borderColor: '#FFF', padding: 0, margin: 0}}
											onPress={() => this.onCheckBoxChange(index) }
										/>

									<Text>{item.key}</Text>
								</ListItem>
							</View>
						}>
					</List>
				</Content>
			</Container>
		)	
	}
}

const styles = {
	container: {
		backgroundColor: '#FFF'
	}
}

export const addProgramTabNav = TabNavigator({
	addProg: { screen: AddProgramScreen },
	customize: { screen: AddProgramScreen },
}, {
	lazy: true,
	tabBarOptions: {
		style: {
			backgroundColor: '#05668D',
		},
		indicatorStyle: {
			backgroundColor: '#02C39A'
		},
		tabStyle: {
			height: 40,
		}
	},
})

const uiTheme = {
	toolbar: {
		container: {
			backgroundColor: '#05668D',
			shadowOpacity: 0,
			shadowOffset: {
				height: 0
			},
			shadowRadius: 0,
			elevation: 0,
		}	
	}
}
