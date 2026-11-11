/**
 * Single source of truth for everything the public site links to or shows.
 *
 * These values are public by design: they point at a downloadable APK and a
 * public releases page. Keep secrets (server keys, tokens, private URLs) out
 * of this file — this repository is public.
 */

/** Direct link to the latest signed APK asset. */
export const APK_URL =
  'https://github.com/Autumnfalls77777/Splitie-Website/releases/latest/download/splitie.apk';

/** SHA-256 of the exact APK served at APK_URL. Lowercase hex, 64 characters. */
export const SHA256 = '2a83f521fbada153bd545add6ad3faba4d9f463e259b81e8a35d10b3a05daab9';

/** Public releases page for the site repo (the app repo itself is private). */
export const GITHUB_URL = 'https://github.com/Autumnfalls77777/Splitie-Website';

/** Public releases list. */
export const RELEASES_URL = `${GITHUB_URL}/releases`;

/** Support / privacy / bug reports. */
export const CONTACT_EMAIL = 'prabaljaiswal69420@gmail.com';
