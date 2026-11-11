'use client';

import { useState } from 'react';

import { Icon } from './Icons';

type Share = {
  name: string;
  amount: string;
  note?: string;
};

type TripItem = {
  label: string;
  amount: string;
  paidBy: string;
  method: string;
  shares: Share[];
};

type TripCard = {
  place: string;
  people: string;
  title: string;
  items: TripItem[];
  total: string;
  settle: string;
};

const trips: TripCard[] = [
  {
    place: 'Goa',
    people: '04 people',
    title: 'Goa with the usuals.',
    items: [
      {
        label: 'Dinner at Thalassa',
        amount: '₹2,400',
        paidBy: 'You',
        method: 'Split equally, 4 ways',
        shares: [
          { name: 'You', amount: '₹600' },
          { name: 'Priya', amount: '₹600' },
          { name: 'Kabir', amount: '₹600' },
          { name: 'Meera', amount: '₹600' },
        ],
      },
      {
        label: 'Cab to the airport',
        amount: '₹850',
        paidBy: 'Priya',
        method: 'Split equally, 4 ways',
        shares: [
          { name: 'Priya', amount: '₹212.50' },
          { name: 'You', amount: '₹212.50' },
          { name: 'Kabir', amount: '₹212.50' },
          { name: 'Meera', amount: '₹212.50' },
        ],
      },
      {
        label: 'Beach shack lunch',
        amount: '₹1,600',
        paidBy: 'Kabir',
        method: 'Split by percent, 40/30/20/10',
        shares: [
          { name: 'Kabir', amount: '₹640', note: '40%' },
          { name: 'Priya', amount: '₹480', note: '30%' },
          { name: 'Meera', amount: '₹320', note: '20%' },
          { name: 'You', amount: '₹160', note: '10%' },
        ],
      },
    ],
    total: '₹4,850',
    settle: 'Settled in 3 transfers',
  },
  {
    place: 'Mumbai',
    people: '03 people',
    title: 'Mumbai in the rain.',
    items: [
      {
        label: 'Bandra to Colaba cab',
        amount: '₹680',
        paidBy: 'Rhea',
        method: 'Split equally, 3 ways',
        shares: [
          { name: 'Rhea', amount: '₹226.67' },
          { name: 'You', amount: '₹226.67' },
          { name: 'Sam', amount: '₹226.66' },
        ],
      },
      {
        label: 'Dadar to Pune flight',
        amount: '₹3,200',
        paidBy: 'Rhea',
        method: 'Split equally, 3 ways',
        shares: [
          { name: 'Rhea', amount: '₹1,066.67' },
          { name: 'You', amount: '₹1,066.67' },
          { name: 'Sam', amount: '₹1,066.66' },
        ],
      },
      {
        label: 'Vada pav and chai',
        amount: '₹240',
        paidBy: 'You',
        method: 'Split equally, 3 ways',
        shares: [
          { name: 'You', amount: '₹80' },
          { name: 'Rhea', amount: '₹80' },
          { name: 'Sam', amount: '₹80' },
        ],
      },
    ],
    total: '₹4,120',
    settle: 'Settled in 2 transfers',
  },
  {
    place: 'Kerala',
    people: '05 people',
    title: 'Kerala, backwater slow.',
    items: [
      {
        label: 'Houseboat, full day',
        amount: '₹6,400',
        paidBy: 'Meera',
        method: 'Split equally, 5 ways',
        shares: [
          { name: 'Meera', amount: '₹1,280' },
          { name: 'You', amount: '₹1,280' },
          { name: 'Arjun', amount: '₹1,280' },
          { name: 'Divya', amount: '₹1,280' },
          { name: 'Neel', amount: '₹1,280' },
        ],
      },
      {
        label: 'Kumarakom ferry',
        amount: '₹850',
        paidBy: 'You',
        method: 'Split equally, 5 ways',
        shares: [
          { name: 'You', amount: '₹170' },
          { name: 'Meera', amount: '₹170' },
          { name: 'Arjun', amount: '₹170' },
          { name: 'Divya', amount: '₹170' },
          { name: 'Neel', amount: '₹170' },
        ],
      },
      {
        label: 'Toddy shop, all evening',
        amount: '₹450',
        paidBy: 'Arjun',
        method: 'Split by percent, 40/20/20/10/10',
        shares: [
          { name: 'Arjun', amount: '₹180', note: '40%' },
          { name: 'Meera', amount: '₹90', note: '20%' },
          { name: 'You', amount: '₹90', note: '20%' },
          { name: 'Divya', amount: '₹45', note: '10%' },
          { name: 'Neel', amount: '₹45', note: '10%' },
        ],
      },
    ],
    total: '₹7,700',
    settle: 'Settled in 4 transfers',
  },
  {
    place: 'Coorg',
    people: '02 people',
    title: 'Coorg, two of us.',
    items: [
      {
        label: 'Coffee plantation tour',
        amount: '₹1,200',
        paidBy: 'Neha',
        method: 'Split equally, 2 ways',
        shares: [
          { name: 'Neha', amount: '₹600' },
          { name: 'You', amount: '₹600' },
        ],
      },
      {
        label: 'Cottage, two nights',
        amount: '₹3,500',
        paidBy: 'You',
        method: 'Split equally, 2 ways',
        shares: [
          { name: 'You', amount: '₹1,750' },
          { name: 'Neha', amount: '₹1,750' },
        ],
      },
      {
        label: 'River walk and lunch',
        amount: '₹640',
        paidBy: 'Neha',
        method: 'Split equally, 2 ways',
        shares: [
          { name: 'Neha', amount: '₹320' },
          { name: 'You', amount: '₹320' },
        ],
      },
    ],
    total: '₹5,340',
    settle: 'Settled in 1 transfer',
  },
];

export function TripDeck() {
  const [front, setFront] = useState(0);
  const [openLine, setOpenLine] = useState<number[]>([]);

  const slots = trips.map((_, index) => (index - front + trips.length) % trips.length);

  const bringToFront = (index: number) => {
    setFront(index);
    setOpenLine([]);
  };

  const step = (delta: number) => {
    setFront((current) => (current + delta + trips.length) % trips.length);
    setOpenLine([]);
  };

  return (
    <div className="receipt-deck-wrap">
      <div className="deck-stage">
        <div className="receipt-deck">
        <div className="ledger-accent" aria-hidden="true" />

        {trips.map((trip, index) => {
          const slot = slots[index];
          const isFront = slot === 0;

          return (
            <article
              key={trip.place}
              className="receipt receipt-card"
              data-slot={slot}
              inert={!isFront}
              onClick={(event) => {
                if ((event.target as HTMLElement).closest('button, a')) return;
                if (isFront) step(1);
                else bringToFront(index);
              }}
            >
              <div className="receipt-head">
                <span>Splitie / {trip.place}</span>
                <span>{trip.people}</span>
              </div>

              <p className="receipt-title">{trip.title}</p>

              <p className="receipt-hint">
                <Icon name="arrow-right" size={12} />
                Tap a line to see the split
              </p>

              <ul className="receipt-list">
                {trip.items.map((item, lineIndex) => {
                  const isOpen = isFront && openLine.includes(lineIndex);

                  return (
                    <li key={item.label} className="receipt-item" data-open={isOpen}>
                      <button
                        type="button"
                        className="receipt-item-btn"
                        aria-expanded={isOpen}
                        aria-controls={`split-${trip.place}-${lineIndex}`}
                        onClick={() =>
                          setOpenLine((current) =>
                            current.includes(lineIndex)
                              ? current.filter((value) => value !== lineIndex)
                              : [...current, lineIndex],
                          )
                        }
                      >
                        <span className="receipt-item-label">{item.label}</span>
                        <span className="receipt-item-amount">{item.amount}</span>
                        <Icon name="chevron-down" size={14} className="receipt-item-chevron" />
                      </button>

                      <div
                        id={`split-${trip.place}-${lineIndex}`}
                        className="receipt-detail"
                        data-open={isOpen}
                        inert={!isOpen}
                      >
                        <div className="receipt-detail-inner">
                          <p className="receipt-detail-meta">
                            Paid by <strong>{item.paidBy}</strong> · {item.method}
                          </p>

                          <ul className="receipt-share-list">
                            {item.shares.map((share) => (
                              <li key={share.name} className="receipt-share">
                                <span>{share.name}</span>
                                <span className="receipt-share-amount">
                                  {share.amount}
                                  {share.note ? <em>{share.note}</em> : null}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="receipt-total">
                <span>Total</span>
                <span>{trip.total}</span>
              </div>

              <div className="receipt-foot">
                <span>{trip.settle}</span>
                <span aria-hidden="true">✓</span>
              </div>
            </article>
          );
        })}
        </div>
      </div>

      <div className="deck-controls">
        <button
          type="button"
          className="deck-arrow"
          aria-label="Previous trip"
          onClick={() => step(-1)}
        >
          <Icon name="arrow-right" size={16} className="deck-arrow-flip" />
        </button>

        <ul className="deck-dots">
          {trips.map((trip, index) => (
            <li key={trip.place}>
              <button
                type="button"
                className="deck-dot"
                aria-label={`Show ${trip.place} trip`}
                aria-current={index === front ? 'true' : undefined}
                onClick={() => bringToFront(index)}
              >
                <span className="deck-dot-mark" />
                <span className="deck-dot-label">{trip.place}</span>
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="deck-arrow" aria-label="Next trip" onClick={() => step(1)}>
          <Icon name="arrow-right" size={16} />
        </button>
      </div>
    </div>
  );
}
