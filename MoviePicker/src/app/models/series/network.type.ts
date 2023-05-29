/**
 * Az egy televíziós hálózatot reprezentáló interfész.
 */
export interface Network {
  /**
   * A hálózat azonosítója.
   */
  id: number;
  /**
   * A hálózat logó útvonala.
   */
  logo_path: string;
  /**
   * A hálózat neve.
   */
  name: string;
  /**
   * A hálózat származási országa.
   */
  origin_country: string;
}
