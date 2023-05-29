/**
 * Az általános listát reprezentáló interfész, melynek elemei típusparaméterként vannak megadva.
 */
export interface List<T> {
  /**
   * A lekérdezés dátumtartománya.
   */
  dates?: Dates;
  /**
   * Az oldalszám.
   */
  page: number;
  /**
   * A lista elemei.
   */
  results: T[];
  /**
   * Az összes oldal száma.
   */
  total_pages: number;
  /**
   * Az összes elem száma.
   */
  total_results: number;
}

/**
 * Az általános dátumokat reprezentáló interfész.
 */
export interface Dates {
  /**
   * A legkésőbbi dátum a tartományban.
   */
  maximum: string;
  /**
   * A legkorábbi dátum a tartományban.
   */
  minimum: string;
}
