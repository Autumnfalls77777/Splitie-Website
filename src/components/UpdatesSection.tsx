import { updates, type UpdateEntry } from '@/updates';
import { Icon } from './Icons';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return value;
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

function UpdateRow({ entry }: { entry: UpdateEntry }) {
  return (
    <article className="update-row">
      <div className="update-meta">
        <p className="update-version">v{entry.version}</p>
        <time className="update-date" dateTime={entry.date}>
          {formatDate(entry.date)}
        </time>
        <span className="update-type">
          {entry.type === 'apk' ? 'New APK' : 'In-app update'}
        </span>
      </div>

      <div>
        <h3>{entry.title}</h3>
        <ul className="update-notes">
          {entry.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function UpdatesSection() {
  const [latest, ...older] = updates;

  return (
    <section id="updates" className="updates-section">
      <div className="container-page updates-grid">
        <div className="updates-head">
          <h2 className="section-title">What&apos;s new.</h2>
          <p className="section-lede">
            Fixes arrive over the air. Changes to native code need a fresh APK, installed over the
            top.
          </p>
        </div>

        <div>
          {latest ? <UpdateRow entry={latest} /> : null}

          {older.length > 0 ? (
            <details className="older-updates">
              <summary>
                Older releases
                <Icon name="chevron-down" size={17} />
              </summary>
              {older.map((entry) => (
                <UpdateRow key={`${entry.version}-${entry.date}`} entry={entry} />
              ))}
            </details>
          ) : null}
        </div>
      </div>
    </section>
  );
}
