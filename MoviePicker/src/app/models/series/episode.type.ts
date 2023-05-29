import {Member} from "../movie/credits.type";

/**
 * Az egy epizódot reprezentáló interfész.
 */
export interface Episode {
  /**
   * Az epizód azonosítója.
   */
  id: number;
  /**
   * Az epizód címe.
   */
  name: string;
  /**
   * Az epizód leírása.
   */
  overview: string;
  /**
   * Az epizód átlagos értékelése.
   */
  vote_average: number;
  /**
   * Az epizód értékelések száma.
   */
  vote_count: number;
  /**
   * Az epizód adásának dátuma.
   */
  air_date: string;
  /**
   * Az epizód sorszáma a szezonban.
   */
  episode_number: number;
  /**
   * Az epizód gyártási kódja.
   */
  production_code: string;
  /**
   * Az epizód hossza percben.
   */
  runtime?: number;
  /**
   * A szezon sorszáma, amelyben az epizód található.
   */
  season_number: number;
  /**
   * Az sorozat azonosítója.
   */
  show_id: number;
  /**
   * Az epizód képének elérési útja.
   */
  still_path: string;
  /**
   * Az epizód alkotói.
   */
  crew?: Member[];
  /**
   * Az epizód vendégszereplői.
   */
  guest_stars?: Member[];
}
