import {Cast, Crew} from "./common/credits.type";

export interface Season {
  _id?: string;
  air_date?: any;
  episode_count?: number;
  episodes?: Episodes[];
  id: number;
  name: string;
  overview: string;
  poster_path?: any;
  season_number: number;
}

export interface Episodes {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: Crew[];
  guest_stars: Cast[];
}
