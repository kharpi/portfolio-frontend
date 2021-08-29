import * as actionTypes from './actionTypes';
import { DarkModeAction } from './types';

export function toggleDarkMode(toggled: boolean) {
	const action: DarkModeAction = {
		type: actionTypes.TOGGLE_DARKMODE,
		toggled,
	};
	return action;
}
