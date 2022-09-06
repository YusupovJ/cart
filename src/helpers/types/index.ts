interface IRating {
	rate: number;
	count: number;
}

export interface IProduts {
	category?: string;
	description?: string;
	id: number;
	title: string;
	price: number;
	image: string;
	rating?: IRating;
}
