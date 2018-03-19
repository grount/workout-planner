import React from 'react'; 
import { View, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import { Content, Container, Text, List, ListItem, Separator } from 'native-base';

export default class AddProgramScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			
			data: [
				{key: 'Bench Press', header: true},
				{key: 'Bench Press1', header: false},
				{key: 'Bench Press2', header: false},
				{key: 'Bench Press3', header: false},
				{key: 'Bench Press4', header: false},
				{key: 'Bench Press5', header: false},
				{key: 'Bench Press6', header: false},
				{key: 'Bench Press7', header: false},
				{key: 'Bench Press8', header: false},
				{key: 'Bench Press9', header: false},
				{key: 'Shoulders', header: true},
				{key: 'Shoulders1', header: false},
				{key: 'Shoulders2', header: false},
				{key: 'Shoulders3', header: false},
				{key: 'Shoulders4', header: false},
				{key: 'Shoulders5', header: false},
				{key: 'Shoulders6', header: false},
			],
			//			data: ['Test','Test','Test','Test','Test','Test','Test','Test','Test','Test','Test','Test','Test','Test','Test','Test','Test'],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false
		};
	}

	renderHeader = () => {
		return <SearchBar 
			placeholder="Search"
			lightTheme
			round
			icon={{ type: 'font-awesome', name: 'search'}}
		/>
	};

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
				<Separator bordered>
					<Text>{text}</Text>
				</Separator>
			)
		}
		return null;
	}

	render() {
		return (
			<Container>
				<Content>
					{this.renderHeader()}
					<List dataArray={this.state.data}
						renderRow={(item) =>
								<View>
									{this.renderItemHeader(item.key, item.header)}
									<ListItem>
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
	}
})
