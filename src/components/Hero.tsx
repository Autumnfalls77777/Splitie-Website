import { apkIsConfigured, downloadHref } from '@/config';
import { Icon } from './Icons';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-shell">
        <div className="hero-copy-wrap">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span>Split the bill.</span>
              <span>Keep the memories.</span>
            </h1>

            <p className="hero-lede">
              One tab for every shared trip. Add what was spent, see who owes whom, and settle in the
              fewest transfers.
            </p>

            <div className="hero-actions">
              <a
                href={downloadHref}
                className="btn btn-primary"
                title={apkIsConfigured ? 'Download the Splitie APK' : 'APK link coming soon'}
              >
                <Icon name="download" size={17} />
                Download APK
              </a>
              <a href="#features" className="hero-link">
                See how it works
                <Icon name="arrow-right" size={16} />
              </a>
            </div>

            {!apkIsConfigured ? (
              <p className="hero-status">
                The APK link is being finalised. The install steps below show what to expect.
              </p>
            ) : null}
          </div>
        </div>

        <div className="hero-stage">
          <span className="stage-figure" aria-hidden="true">
            ₹3,480
          </span>
          <div className="hero-phone">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
