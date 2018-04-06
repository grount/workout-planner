import Immutable from 'immutable';
import * as types from '../actions/types.js';

const initialState = Immutable.fromJS({
	isProgramExists: false,
});

export default function MainScreenReducer(state = initialState, action) {
	switch (action.type) {
		case types.SET_PROGRAM_EXISTS_CONST:
			return state.set('isProgramExists', action.isProgramExists);
		case types.ADD_PROGRAM_CONST: {
			const programImmutable = Immutable.fromJS(action.program);
			return state.set('program', programImmutable);
		}
		case types.TOGGLE_WORKOUT_ITEM_DISPLAY: {
			return state.setIn(
				['program', 'workout', action.index, 'visible'],
				!state.getIn(['program', 'workout', action.index, 'visible']),
			);
		}
		default:
			return state;
	}
}
