/**
 * Egy vállalatot (cég) reprezentáló interfész.
 */
export interface Company {
  /**
   * A vállalat egyedi azonosítója.
   */
  id: number;
  /**
   * A vállalatlogó képének elérési útvonala.
   */
  logo_path: string;
  /**
   * A vállalat neve.
   */
  name: string;
  /**
   * A vállalat származási országa.
   */
  origin_country: string;
}
