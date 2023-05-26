import {Episode} from "./episode.type";

export interface Season {
  _id?: string;
  air_date?: string;
  episode_count?: number;
  episodes?: Episode[];
  id: number;
  name: string;
  overview: string;
  poster_path?: string;
  season_number: number;
}
