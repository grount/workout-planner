import * as actionTypes from './types.js';

export function setProgramExists(isProgramExists) {
	return {type: actionTypes.SET_PROGRAM_EXISTS_CONST, isProgramExists };
}
