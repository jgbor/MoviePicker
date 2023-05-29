/**
 * Az alkotót (sorozat készítőjét) reprezentáló interfész.
 */
export interface CreatedBy {
  /**
   * Az alkotó azonosítója.
   */
  id: number;
  /**
   * Az alkotó hitelesítési azonosítója.
   */
  credit_id: string;
  /**
   * Az alkotó neve.
   */
  name: string;
  /**
   * Az alkotó nemének kódja.
   */
  gender: number;
  /**
   * Az alkotó profilképének útvonala.
   */
  profile_path: string;
}
