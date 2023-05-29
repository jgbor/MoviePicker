import {Genre} from "../common/genre.type";
import {Company} from "../common/company.type";
import {Country} from "../common/country.type";
import {Language} from "../common/language.type";
import {Season} from "./season.type";
import {Episode} from "./episode.type";
import {Network} from "./network.type";
import {CreatedBy} from "./credit.type";

/**
 * Az egy sorozat adatait reprezentáló interfész.
 */
export interface Series {
  /**
   * Jelzi, hogy a sorozat felnőtteknek szól-e.
   */
  adult?: boolean;
  /**
   * A kép elérési útja.
   */
  backdrop_path: string;
  /**
   * A sorozat készítőinek adatai.
   */
  created_by?: CreatedBy[];
  /**
   * Epizódok hosszai percben.
   */
  episode_run_time?: number[];
  /**
   * A sorozat első adásának dátuma.
   */
  first_air_date: string;
  /**
   * A sorozat műfajainak adatai.
   */
  genres?: Genre[];
  /**
   * A sorozat műfajainak azonosítói.
   */
  genre_ids?: number[];
  /**
   * A sorozat hivatalos weboldala.
   */
  homepage?: string;
  /**
   * A sorozat azonosítója.
   */
  id: number;
  /**
   * Jelzi, hogy a sorozat jelenleg is fut-e.
   */
  in_production?: boolean;
  /**
   * A sorozat nyelvei.
   */
  languages?: string[];
  /**
   * A sorozat utolsó adásának dátuma.
   */
  last_air_date?: string;
  /**
   * Az utolsó adott epizód.
   */
  last_episode_to_air?: Episode;
  /**
   * A sorozat címe.
   */
  name: string;
  /**
   * A következő adás adatai.
   */
  next_episode_to_air?: any;
  /**
   * A sorozat sugárzói.
   */
  networks?: Network[];
  /**
   * Az epizódok száma a sorozatban.
   */
  number_of_episodes?: number;
  /**
   * A szezonok száma a sorozatban.
   */
  number_of_seasons?: number;
  /**
   * A sorozat eredeti országa.
   */
  origin_country: string[];
  /**
   * Az eredeti nyelv kódja.
   */
  original_language: string;
  /**
   * Az eredeti cím.
   */
  original_name: string;
  /**
   * A sorozat leírása.
   */
  overview: string;
  /**
   * A sorozat népszerűsége.
   */
  popularity: number;
  /**
   * A poszter elérési útja.
   */
  poster_path: string;
  /**
   * A sorozat gyártó cégeinek adatai.
   */
  production_companies?: Company[];
  /**
   * A sorozat gyártó országainak adatai.
   */
  production_countries?: Country[];
  /**
   * A szezonok adatai a sorozatban.
   */
  seasons?: Season[];
  /**
   * A beszélt nyelvek a sorozatban.
   */
  spoken_languages?: Language[];
  /**
   * A sorozat státusza (pl. fut, befejezett).
   */
  status?: string;
  /**
   * A sorozat jelmondata.
   */
  tagline?: string;
  /**
   * A sorozat típusa.
   */
  type?: string;
  /**
   * A sorozat átlagos értékelése.
   */
  vote_average: number;
  /**
   * A sorozat értékelések száma.
   */
  vote_count: number;
}
