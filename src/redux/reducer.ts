import * as actionTypes from './actionTypes';
import { DarkModeAction, DarkModeState } from './types';

const initialState: DarkModeState = {
	toggled: false,
};

const reducer = (
	state: DarkModeState = initialState,
	action: DarkModeAction
): DarkModeState => {
	switch (action.type) {
		case actionTypes.TOGGLE_DARKMODE:
			return {
				...state,
				toggled: action.toggled,
			};
	}
	return state;
};

export default reducer;
