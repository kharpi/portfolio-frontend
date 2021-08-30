export type ITechs = {
	status: boolean;
	message: ITech[];
};

export interface ITech {
	text: string;
	value: number;
	createdAt: string;
	updatedAt: string;
}
