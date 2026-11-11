import { Icon } from './Icons';

function Avatar({
  initials,
  color,
  ring = false,
}: {
  initials: string;
  color: string;
  ring?: boolean;
}) {
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold text-[#14180F] ${
        ring ? 'ring-2 ring-lime' : ''
      }`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  );
}

export function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[330px]"
      role="img"
      aria-label="Splitie home screen showing a trip balance, quick actions and an active trip"
    >
      <div aria-hidden="true" className="phone-shell">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-1 pt-2.5 text-[8px] font-semibold text-ink/60">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-[6px] w-[9px] rounded-[2px] bg-ink/60" />
              <span className="inline-block h-[6px] w-[12px] rounded-[2px] border border-ink/50" />
            </span>
          </div>

          <div className="flex-1 overflow-hidden px-3.5 pb-2 pt-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[6.5px] font-medium text-ink-subtle">Tuesday, 10 November</p>
                <p className="font-display text-[13px] font-bold leading-tight tracking-[-0.04em] text-ink">
                  Evening, Prabal
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface">
                  <Icon name="bell" size={11} className="text-ink" />
                  <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-clay" />
                </span>
                <Avatar initials="P" color="#C9F25B" />
              </div>
            </div>

            {/* Balance hero */}
            <div className="mt-2.5 rounded-[20px] border border-[#14180F]/10 bg-gradient-to-br from-lime-bright to-lime p-3 shadow-[0_8px_18px_-8px_rgba(111,143,32,0.55)]">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#14180F]/10 px-2 py-[3px] text-[6.5px] font-bold text-[#14180F]">
                  <span className="h-1 w-1 rounded-full bg-[#14180F]" />
                  2 active trips
                </span>
                <span className="flex -space-x-1.5">
                  <Avatar initials="A" color="#A6D32F" ring />
                  <Avatar initials="R" color="#E9EBDD" ring />
                  <Avatar initials="M" color="#8B6FE8" ring />
                </span>
              </div>

              <p className="mt-2.5 text-[7px] font-semibold text-[#14180F]/60">You are owed in total</p>
              <p className="font-display text-[27px] font-extrabold leading-none tracking-[-0.06em] text-[#14180F]">
                ₹3,480
              </p>
              <p className="mt-[3px] text-[6.5px] font-medium text-[#14180F]/55">
                Across your open trip balances
              </p>

              <div className="mt-2.5 flex items-end justify-between">
                <div className="flex gap-4">
                  <span>
                    <span className="block text-[5.5px] font-medium text-[#14180F]/55">Owed to you</span>
                    <span className="block text-[7.5px] font-bold text-[#14180F]">₹3,480</span>
                  </span>
                  <span>
                    <span className="block text-[5.5px] font-medium text-[#14180F]/55">You owe</span>
                    <span className="block text-[7.5px] font-bold text-[#14180F]">₹1,120</span>
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#14180F] px-2.5 py-1.5 text-[7px] font-bold text-[#F7F9EE]">
                  Settle up
                  <Icon name="arrow-right" size={7} />
                </span>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-2 flex gap-1.5">
              {(
                [
                  { icon: 'receipt', label: 'Add expense', caption: 'Split it', bg: 'bg-lime-soft', fg: 'text-lime-deep' },
                  { icon: 'plane', label: 'New trip', caption: 'Plan it', bg: 'bg-sky/10', fg: 'text-sky' },
                  { icon: 'wallet', label: 'Personal', caption: 'Track it', bg: 'bg-lilac/10', fg: 'text-lilac' },
                ] as const
              ).map((action) => (
                <div
                  key={action.label}
                  className="flex-1 rounded-xl border border-line bg-surface p-2"
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-lg ${action.bg}`}>
                    <Icon name={action.icon} size={10} className={action.fg} />
                  </span>
                  <p className="mt-1 text-[6.5px] font-bold text-ink">{action.label}</p>
                  <p className="text-[5.5px] font-medium text-ink-subtle">{action.caption}</p>
                </div>
              ))}
            </div>

            {/* Trip card */}
            <div className="mt-2.5 flex items-center justify-between">
              <p className="text-[8px] font-bold text-ink">Active trips</p>
              <p className="text-[6px] font-semibold text-lime-deep">See all</p>
            </div>
            <div className="mt-1.5 overflow-hidden rounded-[16px] border border-line bg-surface">
              <div className="flex h-12 items-center justify-between bg-gradient-to-br from-[#2E9C86] to-[#4C7DF0] px-2.5">
                <span className="text-[15px]">🏖️</span>
                <span className="rounded-full bg-white/20 px-1.5 py-[2px] text-[5.5px] font-bold text-white">
                  ₹18,240 spent
                </span>
              </div>
              <div className="p-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8.5px] font-bold text-ink">Goa with the usuals</p>
                    <p className="text-[6px] font-medium text-ink-subtle">4 people · 5 days</p>
                  </div>
                  <span className="text-[7.5px] font-bold text-positive">+₹2,360</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-alt">
                  <div className="h-full w-[62%] rounded-full bg-lime-deep" />
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="mt-2.5 flex items-center justify-between">
              <p className="text-[8px] font-bold text-ink">Recent activity</p>
              <p className="text-[6px] font-semibold text-ink-subtle">Latest splits</p>
            </div>
            <div className="mt-1.5 divide-y divide-line rounded-[14px] border border-line bg-surface px-2.5">
              {[
                { emoji: '🍝', title: 'Dinner at Thalassa', meta: 'Asha paid · split 4 ways', amount: '₹2,400' },
                { emoji: '🚕', title: 'Cab to the airport', meta: 'Ravi paid · split 3 ways', amount: '₹850' },
              ].map((row) => (
                <div key={row.title} className="flex items-center gap-2 py-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-surface-alt text-[9px]">
                    {row.emoji}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[6.5px] font-bold text-ink">{row.title}</span>
                    <span className="block text-[5.5px] font-medium text-ink-subtle">{row.meta}</span>
                  </span>
                  <span className="text-[6.5px] font-bold text-ink">{row.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating tab bar */}
          <div className="mx-2.5 mb-2.5 flex items-center justify-between rounded-full border border-line/80 bg-surface/95 px-4 py-2 shadow-[0_8px_18px_-10px_rgba(20,24,15,0.4)]">
            <Icon name="receipt" size={12} className="text-lime-deep" />
            <Icon name="plane" size={12} className="text-ink-subtle" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-on-lime shadow-sm">
              <span className="text-[13px] font-bold leading-none">+</span>
            </span>
            <Icon name="wallet" size={12} className="text-ink-subtle" />
            <Icon name="chart" size={12} className="text-ink-subtle" />
          </div>
        </div>
      </div>

    </div>
  );
}
