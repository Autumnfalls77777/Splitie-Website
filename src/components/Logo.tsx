export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="rotate(-22 512 512)">
        <path d="M192 512 A320 320 0 0 1 832 512 Z" fill="currentColor" />
        <g transform="translate(0 42)" opacity="0.55">
          <path d="M192 512 A320 320 0 0 0 832 512 Z" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

export function Logo({
  className = '',
  markClassName = 'h-8 w-8',
  wordmarkClassName = 'text-[1.65rem]',
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={markClassName} />
      <span className="inline-flex items-end">
        <span
          className={`font-display font-extrabold leading-none tracking-[-0.06em] ${wordmarkClassName}`}
        >
          splitie
        </span>
        <span className="mb-[0.18em] ml-[3px] h-[0.22em] w-[0.22em] rounded-full bg-lime-deep" />
      </span>
    </span>
  );
}
