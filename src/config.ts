/**
 * Everything you must fill in before publishing the site.
 *
 * Placeholders start with "TODO". The UI detects this and renders honest
 * "coming soon" states instead of inventing a download URL or checksum.
 */

/** Direct link to the APK file (GitHub Releases asset, Cloudflare R2, etc.). */
export const APK_URL = 'TODO_APK_URL';

/** SHA-256 of the exact APK served at APK_URL. Lowercase hex, 64 characters. */
export const SHA256 = 'TODO_SHA256_CHECKSUM';

/** Public releases page, e.g. https://github.com/<owner>/<repo>/releases */
export const GITHUB_URL = 'TODO_GITHUB_URL';

/** Support / privacy / bug reports. Keep this out of the public repo. */
export const CONTACT_EMAIL = 'TODO_CONTACT_EMAIL';

export function isConfigured(value: string): boolean {
  return value.length > 0 && !value.startsWith('TODO');
}

/** Only accept real HTTPS destinations; anything else falls back to #install. */
function isHttpsUrl(value: string): boolean {
  return isConfigured(value) && value.startsWith('https://');
}

export const apkIsConfigured = isHttpsUrl(APK_URL);
export const checksumIsConfigured = /^[a-f0-9]{64}$/i.test(SHA256);
export const githubIsConfigured = isHttpsUrl(GITHUB_URL);
export const contactIsConfigured = isConfigured(CONTACT_EMAIL);

/** Where download buttons point until APK_URL is filled in. */
export const downloadHref = apkIsConfigured ? APK_URL : '#install';
