/**
 * Single source of truth for the website's release metadata.
 *
 * To publish a new release, add an entry at the TOP of `updates`, update the
 * version in app.json, and point APK_URL/SHA256 at the new build in config.ts.
 */

export type UpdateType = 'apk' | 'auto';

export type UpdateEntry = {
  /** Shown in the hero, the timeline and the install guide. */
  version: string;
  /** YYYY-MM-DD */
  date: string;
  title: string;
  notes: string[];
  /** "apk" = needs a fresh download, "auto" = delivered by OTA update. */
  type: UpdateType;
};

export const updates: UpdateEntry[] = [
  {
    version: '1.0.0',
    date: '2026-11-11',
    title: 'Initial release',
    notes: [
      'First public release of Splitie for Android.',
      'Create trips and add shared expenses that split equally, exactly, by percent or by shares.',
      'See the fewest transfers that settle a trip, then record a payment as made.',
      'Keep a separate personal ledger with monthly budgets, category charts and a CSV export.',
      'Join a trip with a code, set settle-up reminders and sign in with Google.',
      'Crashes are reported so fixes can ship over the air; native changes arrive as a new APK.',
    ],
    type: 'apk',
  },
];

/** Newest entry first, used by the hero line and the install guide. */
export const latestUpdate = updates[0];
