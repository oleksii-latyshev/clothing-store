export type PaginationResponse<T> = {
	currentPage: number;
	totalPages: number;
	data: T;
};

export type Serialized<T> = {
	[K in keyof T]: T[K] extends Date ? string : T[K] extends object ? Serialized<T[K]> : T[K];
};

export type Deserialized<T> = {
	[K in keyof T]: T[K] extends string
		? string extends T[K]
			? T[K]
			: Date
		: T[K] extends object
			? Deserialized<T[K]>
			: T[K];
};
