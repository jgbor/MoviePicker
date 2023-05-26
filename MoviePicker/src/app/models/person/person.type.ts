export interface Person {
	adult: boolean;
	also_known_as?: string[];
	biography?: string;
	birthday?: string;
	deathday?: string;
	gender: number;
	homepage?: string;
	id: number;
  known_for?: Known_for[];
	imdb_id?: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string;
}

export interface Known_for {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
