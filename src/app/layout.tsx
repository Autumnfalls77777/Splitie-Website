import type { Metadata, Viewport } from 'next';

import './globals.css';

const title = 'Splitie — Split the bill. Keep the memories.';
const description =
  'A free Android app for shared trips. Split expenses, see who owes whom, and settle in the fewest transfers.';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Splitie',
  keywords: [
    'split expenses',
    'trip expense splitter',
    'expense sharing app',
    'settle up',
    'Android APK',
    'Splitie',
  ],
  authors: [{ name: 'Prabal Jaiswal' }],
  creator: 'Prabal Jaiswal',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/icon.png', type: 'image/png' }],
  },
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Splitie',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F5EC' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1209' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
