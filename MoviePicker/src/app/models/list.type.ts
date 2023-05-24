export interface List<T> {
  dates?: Dates;
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}
