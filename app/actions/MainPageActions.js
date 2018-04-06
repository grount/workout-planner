import * as actionTypes from './types.js';

export function setProgramExists(isProgramExists) {
	return {type: actionTypes.SET_PROGRAM_EXISTS_CONST, isProgramExists};
}

export function addProgram(program) {
	return {type: actionTypes.ADD_PROGRAM_CONST, program};
}

export function toggleWorkoutItemDisplay(index) {
	return {type: actionTypes.TOGGLE_WORKOUT_ITEM_DISPLAY, index};
}
