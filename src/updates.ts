/**
 * Single source of truth for the website's release metadata.
 *
 * To publish a new release, add an entry at the TOP of `updates` and fill in
 * the four values in config.ts. Nothing else needs to change.
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
  // Update this entry (and add older ones, newest first) to match the builds
  // you actually publish. Dates are YYYY-MM-DD.
  {
    version: '1.0.0',
    date: '2026-11-10',
    title: 'Initial Android release',
    notes: [
      'Create trips, add shared expenses and split them equally, exactly, by percent or by shares.',
      'See the fewest transfers that settle the trip, then record a payment without moving money in the app.',
      'Personal budgets, category charts, CSV export, join codes and settle-up reminders.',
    ],
    type: 'apk',
  },
];

/** Newest entry first, used by the hero line and the install guide. */
export const latestUpdate = updates[0];
