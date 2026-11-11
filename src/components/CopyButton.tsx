'use client';

import { useState } from 'react';

import { Icon } from './Icons';

export function CopyButton({
  value,
  label = 'Copy',
  disabled = false,
  className = '',
}: {
  value: string;
  label?: string;
  disabled?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (disabled) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API needs a secure context; fall back for http previews.
      try {
        const area = document.createElement('textarea');
        area.value = value;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      } catch {
        setCopied(false);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      disabled={disabled}
      className={`btn btn-outline btn-sm ${className}`}
      aria-label={copied ? 'Copied' : label}
    >
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      {copied ? 'Copied' : label}
    </button>
  );
}
