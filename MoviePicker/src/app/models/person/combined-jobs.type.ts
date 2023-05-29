/**
 * Az összesített munkák adatait reprezentáló interfész.
 */
export interface CombinedJobs {
  /**
   * A szereplések.
   */
  cast: Job[];
  /**
   * A stábtagságok.
   */
  crew: Job[];
  /**
   * Az összesített munkák azonosítója.
   */
  id: number;
}

/**
 * Az összesített stáblista szereplőinek adatait reprezentáló interfész.
 */
export interface Job {
  /**
   * Jelzi, hogy a szereplő mű felnőtteknek szól-e.
   */
  adult: boolean;
  /**
   * A kép elérési útja.
   */
  backdrop_path: string;
  /**
   * A mű műfajainak azonosítói.
   */
  genre_ids: number[];
  /**
   * A mű azonosítója.
   */
  id: number;
  /**
   * Az eredeti nyelv.
   */
  original_language: string;
  /**
   * Az eredeti cím.
   */
  original_title: string;
  /**
   * A mű leírása.
   */
  overview: string;
  /**
   * A népszerűség.
   */
  popularity: number;
  /**
   * A poszter elérési útja.
   */
  poster_path: string;
  /**
   * A mű megjelenési dátuma.
   */
  release_date: string;
  /**
   * A mű címe.
   */
  title?: string;
  /**
   * A szereplő neve.
   */
  name?: string;
  video: boolean;
  /**
   * A mű átlagos értékelése.
   */
  vote_average: number;
  /**
   * A mű értékeléseinek száma.
   */
  vote_count: number;
  /**
   * A karaktere a műben.
   */
  character?: string;
  /**
   * A munka azonosítója.
   */
  credit_id: string;
  /**
   * A média típusa (pl. movie, tv).
   */
  media_type: string;
  /**
   * A stábrészleg.
   */
  department?: string;
  /**
   * A munkakör.
   */
  job?: string;
}
