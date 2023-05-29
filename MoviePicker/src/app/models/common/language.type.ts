/**
 * Egy nyelvet reprezentáló interfész.
 */
export interface Language {
  /**
   * Az angol neve a nyelvnek.
   */
  english_name: string;
  /**
   * Az ISO 639-1 kódja a nyelvnek.
   */
  iso_639_1: string;
  /**
   * A nyelv neve.
   */
  name: string;
}
