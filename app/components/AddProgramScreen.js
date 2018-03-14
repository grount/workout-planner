import React from 'react'; 
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';


export default class AddProgramScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			data: [
				{key: 'Bench Press'},
				{key: 'Bench Press1'},
				{key: 'Bench Press2'},
				{key: 'Bench Press3'},
				{key: 'Bench Press4'},
				{key: 'Bench Press5'},
				{key: 'Bench Press6'},
				{key: 'Bench Press7'},
				{key: 'Bench Press8'},
				{key: 'Bench Press9'},
				{key: 'Bench Press10'},
				{key: 'Bench Press11'},
				{key: 'Bench Press12'},
				{key: 'Bench Press13'},
				{key: 'Bench Press14'},
				{key: 'Bench Press15'},
				{key: 'Bench Press16'},
				{key: 'Bench Press17'},
			],
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
	render() {
		return(
			<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
				<FlatList
					data={this.state.data}
					renderItem={({item})=> (
						<ListItem
							roundAvatar
							title= {item.key}
							key={item.key}
						/>
					)}
					ListHeaderComponent={this.renderHeader}
				>
				</FlatList>
			</List>
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






