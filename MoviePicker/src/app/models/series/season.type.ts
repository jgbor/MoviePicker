import {Episode} from "./episode.type";

/**
 * Az egy szezont reprezentáló interfész.
 */
export interface Season {
  /**
   * Az egyedi azonosító.
   */
  _id?: string;
  /**
   * A szezon első adásának dátuma.
   */
  air_date?: string;
  /**
   * Az epizódok száma a szezonban.
   */
  episode_count?: number;
  /**
   * Az epizódok adatai a szezonban.
   */
  episodes?: Episode[];
  /**
   * A szezon azonosítója.
   */
  id: number;
  /**
   * A szezon címe.
   */
  name: string;
  /**
   * A szezon leírása.
   */
  overview: string;
  /**
   * A poszter elérési útja.
   */
  poster_path?: string;
  /**
   * A szezon sorszáma.
   */
  season_number: number;
}
