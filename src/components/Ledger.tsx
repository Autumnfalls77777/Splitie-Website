import { TripDeck } from './TripDeck';

const features = [
  {
    title: 'Split it.',
    body: 'Equal, exact, percent or shares. Leftover paise are handled so the split still adds up.',
  },
  {
    title: 'Square it.',
    body: 'See the fewest transfers that clear the trip, then mark a payment as made.',
  },
  {
    title: 'Keep it.',
    body: 'Budgets, charts and CSV for your own spending, separate from the group tab.',
  },
];

export function Ledger() {
  return (
    <section id="features" className="ledger-section section-pad">
      <div className="container-page ledger-grid">
        <div className="ledger-visual">
          <TripDeck />
        </div>

        <div className="ledger-copy">
          <h2 className="section-title">
            The maths,
            <br />
            {' '}minus the group chat.
          </h2>
          <p className="section-lede">
            Splitie keeps the whole trip in one ledger. Add an expense, choose how it should split,
            and it finds the shortest path back to zero.
          </p>

          <div className="ledger-rows">
            {features.map((feature) => (
              <div key={feature.title} className="ledger-row">
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
