import {
  apkIsConfigured,
  checksumIsConfigured,
  downloadHref,
  githubIsConfigured,
  GITHUB_URL,
  SHA256,
} from '@/config';
import { CopyButton } from './CopyButton';
import { Icon } from './Icons';

const steps = [
  {
    title: 'Download the APK',
    body: 'Use the button on this page. Keep the file in your Downloads folder.',
  },
  {
    title: 'Allow the install',
    body: 'Android will ask you to allow installs from your browser or file manager. Approve it for that app only.',
  },
  {
    title: 'Install and sign in',
    body: 'If Play Protect warns you, choose More details, then Install anyway. Open Splitie and create or join a trip.',
  },
];

const powershell = 'Get-FileHash .\\splitie.apk -Algorithm SHA256';
const unix = 'sha256sum splitie.apk';

export function Install() {
  return (
    <section id="install" className="install-section section-pad">
      <div className="container-page install-inner">
        <div className="install-head">
          <div>
            <h2 className="install-title">
              Get it on
              <br />
              {' '}Android.
            </h2>
            <p className="install-lede">
              Direct APK. Android 7.0 or newer. About a minute, including the part Android makes
              look scary.
            </p>
          </div>

          {apkIsConfigured ? (
            <a href={downloadHref} className="btn btn-primary">
              <Icon name="download" size={17} />
              Download APK
            </a>
          ) : (
            <span className="btn btn-on-dark cursor-not-allowed opacity-60" aria-disabled="true">
              <Icon name="download" size={17} />
              APK link coming soon
            </span>
          )}
        </div>

        <ol className="install-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="install-step">
              <span className="install-step-num" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="install-details">
          <details className="install-detail">
            <summary>
              Verify the download
              <Icon name="chevron-down" size={18} />
            </summary>
            <div className="install-detail-body">
              <p>
                Every release is published with its SHA-256 fingerprint. Compare it with the file
                you downloaded before installing.
              </p>

              {checksumIsConfigured ? (
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-start">
                  <code className="code-box code-box-dark flex-1">{SHA256}</code>
                  <CopyButton
                    value={SHA256}
                    label="Copy hash"
                    className="btn-on-dark"
                  />
                </div>
              ) : (
                <p className="mt-4">
                  The checksum is added here with each APK release. Until then, only install the
                  file from the official link on this page.
                </p>
              )}

              <div className="mt-5 grid gap-3">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[0.78rem] font-semibold text-contrast-ink">
                      Windows (PowerShell)
                    </p>
                    <CopyButton value={powershell} label="Copy" className="btn-on-dark" />
                  </div>
                  <code className="code-box code-box-dark mt-1.5">{powershell}</code>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[0.78rem] font-semibold text-contrast-ink">
                      Linux / macOS
                    </p>
                    <CopyButton value={unix} label="Copy" className="btn-on-dark" />
                  </div>
                  <code className="code-box code-box-dark mt-1.5">{unix}</code>
                </div>
              </div>

              <div className="mt-5">
                {githubIsConfigured ? (
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 font-semibold"
                  >
                    <Icon name="github" size={16} />
                    GitHub releases
                    <Icon name="arrow-right" size={14} />
                  </a>
                ) : (
                  <p className="inline-flex items-center gap-2 text-[0.8rem] text-contrast-ink/55">
                    <Icon name="github" size={16} />
                    GitHub releases link is coming soon.
                  </p>
                )}
              </div>
            </div>
          </details>

          <details className="install-detail">
            <summary>
              What it can access
              <Icon name="chevron-down" size={18} />
            </summary>
            <div className="install-detail-body">
              <dl className="install-permissions">
                <div>
                  <dt>Notifications</dt>
                  <dd>Trip invites and settle-up reminders you choose to set or receive.</dd>
                </div>
                <div>
                  <dt>Exact alarms</dt>
                  <dd>A reminder at the time you picked, rather than a vague window.</dd>
                </div>
                <div>
                  <dt>Photos / media</dt>
                  <dd>Only when you pick a profile avatar. Splitie does not browse your gallery.</dd>
                </div>
                <div>
                  <dt>Network access</dt>
                  <dd>Google sign-in, Supabase sync and in-app update checks.</dd>
                </div>
              </dl>
              <p className="mt-4">
                No precise location, contacts, SMS messages, bank accounts, cards or UPI details are
                collected. The full data list is in the{' '}
                <a href="#privacy">privacy summary</a>.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
