import {Genre} from '../common/genre.type';
import {Company} from '../common/company.type';
import {Country} from '../common/country.type';
import {Language} from "../common/language.type";

/**
 * Az egyes filmeket reprezentáló interfész.
 */
export interface Movie {
  /**
   * Megjelöli, hogy a film felnőtteknek szól-e.
   */
  adult: boolean;
  /**
   * A kép elérési útja.
   */
  backdrop_path: string;
  /**
   * A film egy gyűjteményhez tartozik-e.
   */
  belongs_to_collection?: any;
  /**
   * A film költségvetése.
   */
  budget?: number;
  /**
   * A filmhez műfajai.
   */
  genres?: Genre[];
  /**
   * A filmhez tartozó műfajok azonosítói.
   */
  genre_ids?: number[];
  /**
   * A film hivatalos weboldala.
   */
  homepage?: string;
  /**
   * A film azonosítója.
   */
  id: number;
  /**
   * Az IMDb azonosítója a filmnek.
   */
  imdb_id?: string;
  /**
   * A film eredeti nyelve.
   */
  original_language: string;
  /**
   * A film eredeti címe.
   */
  original_title: string;
  /**
   * A film rövid leírása.
   */
  overview: string;
  /**
   * A film népszerűsége.
   */
  popularity: number;
  /**
   * A film poszterének elérési útja.
   */
  poster_path: string;
  /**
   * A film gyártócégei.
   */
  production_companies?: Company[];
  /**
   * A film gyártási országai.
   */
  production_countries?: Country[];
  /**
   * A film bemutató dátuma.
   */
  release_date: string;
  /**
   * A film bevétele.
   */
  revenue?: number;
  /**
   * A film hossza percekben.
   */
  runtime?: number;
  /**
   * A film beszélt nyelvei.
   */
  spoken_languages?: Language[];
  /**
   * A film státusza.
   */
  status?: string;
  /**
   * A film jelmondata.
   */
  tagline?: string;
  /**
   * A film címe.
   */
  title: string;
  video: boolean;
  /**
   * Az átlagos értékelése a filmnek.
   */
  vote_average: number;
  /**
   * A filmre adott szavazatok száma.
   */
  vote_count: number;
}
