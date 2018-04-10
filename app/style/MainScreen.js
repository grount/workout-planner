import {StyleSheet} from 'react-native';

const $green = '#F1F2E6';
const $blue = '#05668D';
const $white = 'white';

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: $green,
		flexDirection: 'column',
	},
	mainContent: {
		flex: 1,
		backgroundColor: $green,
		justifyContent: 'center',
		alignItems: 'center',
	},
	navBar: {
		flex: 0.06,
		backgroundColor: $blue,
	},
	ListItem: {
		backgroundColor: $white,
		marginLeft: 0,
		marginBottom: 5,
	},
	ListItemBody: {
		marginLeft: 10,
	},
});

export default style;
