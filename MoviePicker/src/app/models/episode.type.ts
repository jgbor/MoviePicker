import {Cast, Crew} from "./common/credits.type";

export interface Episode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime?: number;
  season_number: number;
  show_id: number;
  still_path: string;
  crew?: Crew[];
  guest_stars?: Cast[];
}
