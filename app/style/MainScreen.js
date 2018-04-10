import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F1F2E6',
		flexDirection: 'column',
	},
	mainContent: {
		flex: 1,
		backgroundColor: '#F1F2E6',
		justifyContent: 'center',
		alignItems: 'center',
	},
	navBar: {
		flex: 0.06,
		backgroundColor: '#05668D',
	},
	ListItem: {
		backgroundColor: 'white',
		marginLeft: 0,
		marginBottom: 5,
	},
	ListItemBody: {
		marginLeft: 10,
	},
});

export default style;
