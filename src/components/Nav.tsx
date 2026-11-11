'use client';

import { useEffect, useState } from 'react';

import { apkIsConfigured, downloadHref } from '@/config';
import { Icon } from './Icons';
import { Logo } from './Logo';

const links = [
  { href: '#features', label: 'The app' },
  { href: '#install', label: 'Install' },
  { href: '#updates', label: "What's new" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <a
          href="#top"
          className="text-ink transition-opacity hover:opacity-75"
          aria-label="Splitie home"
        >
          <Logo markClassName="h-7 w-7 md:h-8 md:w-8" wordmarkClassName="text-2xl md:text-[1.65rem]" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.84rem] font-semibold text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={downloadHref}
            className="btn btn-primary btn-sm"
            title={apkIsConfigured ? 'Download the Splitie APK' : 'APK link coming soon'}
            aria-label={
              apkIsConfigured
                ? 'Download the Splitie APK'
                : 'Download Splitie APK (link coming soon)'
            }
          >
            <Icon name="download" size={16} />
            <span className="sm:hidden">APK</span>
            <span className="hidden sm:inline">Download APK</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[0.65rem] border border-line bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={19} />
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/70 py-3.5 text-[0.95rem] font-semibold text-ink last:border-0"
              >
                {link.label}
                <Icon name="arrow-right" size={16} className="text-ink-muted" />
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
