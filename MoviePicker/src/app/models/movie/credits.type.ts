/**
 * Az egyes filmek stáblistáját reprezentáló interfész.
 */
export interface Credits {
  /**
   * A stáblista azonosítója.
   */
  id: number;
  /**
   * A szereplők listája.
   */
  cast: Member[];
  /**
   * A stábtagok listája.
   */
  crew: Member[];
}

/**
 * Az egyes szereplőket reprezentáló interfész.
 */
export interface Member {
  /**
   * Megjelöli, hogy a szereplő felnőtt-e.
   */
  adult: boolean;
  /**
   * A szereplő neme.
   */
  gender: number;
  /**
   * A szereplő azonosítója.
   */
  id: number;
  /**
   * A szereplő miről ismert.
   */
  known_for_department: string;
  /**
   * A szereplő neve.
   */
  name: string;
  /**
   * A szereplő eredeti neve.
   */
  original_name: string;
  /**
   * A szereplő népszerűsége.
   */
  popularity: number;
  /**
   * A szereplő profilképének elérési útja.
   */
  profile_path: string;
  /**
   * A szereplő azonosítója a stáblistán.
   */
  cast_id: number;
  /**
   * A karakter, amit a szereplő alakít.
   */
  character?: string;
  /**
   * A szereplő azonosítója a stáblistán.
   */
  credit_id: string;
  /**
   * A sorrend, amiben a szereplő szerepel a stáblistán.
   */
  order?: number;
  /**
   * A részleg, amiben a stábtag dolgozik.
   */
  department?: string;
  /**
   * A munkakör, amit a stábtag betölt.
   */
  job?: string;
}
