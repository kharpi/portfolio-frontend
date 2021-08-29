export interface IDarkMode {
	toggled: boolean;
}

export type DarkModeState = {
	toggled: boolean;
};

export type DarkModeAction = {
	type: string;
	toggled: boolean;
};

export type DispatchType = (args: DarkModeAction) => DarkModeAction;
