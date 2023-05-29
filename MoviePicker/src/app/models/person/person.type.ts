/**
 * Az ember (színész, rendező stb.) adatait reprezentáló interfész.
 */
export interface Person {
  /**
   * Jelzi, hogy az illető felnőtt-e.
   */
  adult: boolean;
  /**
   * A személy más ismert nevei.
   */
  also_known_as?: string[];
  /**
   * A személy életrajza.
   */
  biography?: string;
  /**
   * A személy születésnapja.
   */
  birthday?: string;
  /**
   * A személy halálának dátuma.
   */
  deathday?: string;
  /**
   * A személy nemének azonosítója.
   */
  gender: number;
  /**
   * A személy weboldala.
   */
  homepage?: string;
  /**
   * A személy azonosítója.
   */
  id: number;
  /**
   * A személy ismert munkái.
   */
  known_for?: KnownFor[];
  /**
   * Az IMDb azonosítója.
   */
  imdb_id?: string;
  /**
   * A személy ismert munkakörének neve.
   */
  known_for_department: string;
  /**
   * A személy neve.
   */
  name: string;
  /**
   * A személy születési helye.
   */
  place_of_birth: string;
  /**
   * A személy népszerűsége.
   */
  popularity: number;
  /**
   * A személy profil képének elérési útja.
   */
  profile_path: string;
}

/**
 * Az ismert munkákat reprezentáló interfész.
 */
export interface KnownFor {
  /**
   * Jelzi, hogy az ismert munka felnőtteknek szól-e.
   */
  adult: boolean;
  /**
   * A kép elérési útja.
   */
  backdrop_path: string;
  /**
   * Az ismert munka műfajainak azonosítói.
   */
  genre_ids: number[];
  /**
   * Az ismert munka azonosítója.
   */
  id: number;
  /**
   * Az ismert munka típusa (pl. film, sorozat).
   */
  media_type: string;
  /**
   * Az eredeti nyelv kódja.
   */
  original_language: string;
  /**
   * Az eredeti cím.
   */
  original_title: string;
  /**
   * Az ismert munka leírása.
   */
  overview: string;
  /**
   * A poszter elérési útja.
   */
  poster_path: string;
  /**
   * Az ismert munka megjelenési dátuma.
   */
  release_date: string;
  /**
   * Az ismert munka címe.
   */
  title: string;
  video: boolean;
  /**
   * Az ismert munka átlagos értékelése.
   */
  vote_average: number;
  /**
   * Az ismert munka értékelések száma.
   */
  vote_count: number;
}
