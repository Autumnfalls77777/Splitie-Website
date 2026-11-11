import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Install } from '@/components/Install';
import { Ledger } from '@/components/Ledger';
import { Nav } from '@/components/Nav';
import { UpdatesSection } from '@/components/UpdatesSection';
import { latestUpdate } from '@/updates';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Splitie',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Android 7.0+',
  softwareVersion: latestUpdate.version,
  description:
    'Split shared trip expenses, see who owes whom with the fewest transfers, settle up and send gentle reminders.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  author: {
    '@type': 'Person',
    name: 'Prabal Jaiswal',
  },
};

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-contrast focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-contrast-ink"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Ledger />
        <Install />
        <UpdatesSection />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
