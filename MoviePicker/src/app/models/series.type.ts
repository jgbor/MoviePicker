import {Genre} from "./genre.type";
import {Company} from "./company.type";
import {ProductionCountry} from "./productionCountry.type";
import {Language} from "./language.type";
import {Season} from "./season.type";
import {Episode} from "./episode.type";
import {Network} from "./network.type";
import {CreatedBy} from "./credit.type";

export interface Series {
	adult: boolean;
	backdrop_path: string;
	created_by: CreatedBy[];
	episode_run_time: number[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: Episode;
	name: string;
	next_episode_to_air?: any;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Company[];
	production_countries: ProductionCountry[];
	seasons: Season[];
	spoken_languages: Language[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
}
