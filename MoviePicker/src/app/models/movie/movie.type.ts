import {Genre} from '../common/genre.type';
import {Company} from '../common/company.type';
import {Country} from '../common/country.type';
import {Language} from "../common/language.type";

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection?: any;
	budget?: number;
	genres?: Genre[];
  genre_ids?: number[];
	homepage?: string;
	id: number;
	imdb_id?: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies?: Company[];
	production_countries?: Country[];
	release_date: string;
	revenue?: number;
	runtime?: number;
	spoken_languages?: Language[];
	status?: string;
	tagline?: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
