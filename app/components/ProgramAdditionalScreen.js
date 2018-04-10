import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import style from '../style/ProgramAdditionalScreen.js';

export default class ProgramAdditionalScreen extends React.Component {
	render() {
		return <View style={style.container}>{this.renderComponent()}</View>;
	}
	renderComponent() {
		let items = [];

		for (let i = 0; i < this.props.sets; i++) {
			items.push(
				<Text key={i} style={style.text}>
					{i}
				</Text>,
			);
		}

		return items;
	}
}
