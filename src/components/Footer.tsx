import { contactIsConfigured, CONTACT_EMAIL, githubIsConfigured, GITHUB_URL } from '@/config';
import { latestUpdate } from '@/updates';
import { Icon } from './Icons';
import { Logo } from './Logo';

const sections = [
  { href: '#features', label: 'The app' },
  { href: '#install', label: 'Install' },
  { href: '#updates', label: "What's new" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page py-12 sm:py-16">
        <p className="footer-wordmark" aria-hidden="true">
          splitie.
        </p>

        <div className="footer-grid">
          <div>
            <a href="#top" className="text-ink" aria-label="Back to top">
              <Logo markClassName="h-8 w-8" wordmarkClassName="text-[1.75rem]" />
            </a>
            <p className="footer-note">
              A small, independent expense splitter for trips, dinners and shared homes.
            </p>
            {contactIsConfigured ? (
              <a href={`mailto:${CONTACT_EMAIL}`} className="footer-mail">
                <Icon name="mail" size={14} />
                {CONTACT_EMAIL}
              </a>
            ) : null}
            {githubIsConfigured ? (
              <p className="mt-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-[0.86rem] font-semibold text-ink underline decoration-line-strong underline-offset-4"
                >
                  <Icon name="github" size={14} />
                  GitHub
                </a>
              </p>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <h2 className="footer-heading">Explore</h2>
            <div className="footer-links">
              {sections.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="footer-legal">
            <section id="privacy" className="scroll-mt-24">
              <h3>Privacy</h3>
              <p>
                Account details, trips, expenses and push tokens are stored in Supabase. PostHog
                records product analytics and approximate location from your IP; Sentry records
                crashes. No precise location, contacts, SMS, bank, card or UPI data. Email us for a
                copy or deletion. Not for under-18s. The full policy is in the app.
              </p>
              <p className="legal-meta">Last updated 3 November 2026.</p>
            </section>

            <section id="terms" className="scroll-mt-24">
              <h3>Terms</h3>
              <p>
                Splitie keeps records; it does not move money or verify payments. You must be 18+,
                keep your login safe, and share join codes only with people you trust. Balances are
                a convenience, not proof of debt. Provided as-is. Indian law; courts at Gwalior. The
                full terms are in the app.
              </p>
              <p className="legal-meta">Last updated 3 November 2026.</p>
            </section>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Splitie. Made by Autumn (Prabal Jaiswal).</p>
          <p>
            Android 7.0+ · v{latestUpdate.version} · Not on the Play Store.
          </p>
        </div>
      </div>
    </footer>
  );
}
