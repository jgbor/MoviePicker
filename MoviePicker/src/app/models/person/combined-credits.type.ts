export interface CombinedCredits {
	cast: CombinedCreditsCast[];
	crew: CombinedCreditsCrew[];
	id: number;
}
export interface CombinedCreditsCast {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	character: string;
	credit_id: string;
	order: number;
	media_type: string;
}
export interface CombinedCreditsCrew {
	adult: boolean;
	backdrop_path?: any;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	credit_id: string;
	department: string;
	job: string;
	media_type: string;
}
