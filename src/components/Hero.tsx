import { APK_URL } from '@/config';
import { latestUpdate } from '@/updates';
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
                href={APK_URL}
                download="splitie.apk"
                className="btn btn-primary"
                title="Download the Splitie APK"
              >
                <Icon name="download" size={17} />
                Download APK
              </a>
              <a href="#features" className="hero-link">
                See how it works
                <Icon name="arrow-right" size={16} />
              </a>
            </div>

            <p className="hero-status">
              v{latestUpdate.version} · Android 7.0+ · Direct APK, no Play Store needed.
            </p>
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
