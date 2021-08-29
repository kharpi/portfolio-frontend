import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { DarkModeAction, DarkModeState, DispatchType } from './types';

const localStorageMiddleware = ({ getState }: any) => {
	return (next: any) => (action: any) => {
		const result = next(action);
		localStorage.setItem('applicationState', JSON.stringify(getState()));
		return result;
	};
};

export const store: Store<DarkModeState, DarkModeAction> & {
	dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk, localStorageMiddleware));
