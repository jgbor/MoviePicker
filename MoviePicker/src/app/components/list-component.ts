export interface ListComponent {
  /**
   * Mentés a session storagebe.
   */
  saveToSessionStorage(): void;

  /**
   * Snackbar megnyitása.
   *
   * @param message - A megjelenítendő üzenet.
   * @param action - Az akció szövege.
   */
  openSnackBar(message: string, action: string): void;
}
