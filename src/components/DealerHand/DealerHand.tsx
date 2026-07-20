import type { DealerHand as DealerHandType } from '../../types';
import { Card } from '../Card/Card';
import { CardBack } from '../Card/CardBack';
import styles from './DealerHand.module.css';

export function DealerHand({ cards, isHoleCardHidden }: DealerHandType) {
  return (
    <div className={styles.dealerContainer}>
      {isHoleCardHidden ? (
        <>
          {cards[0] && <Card rank={cards[0].rank} suit={cards[0].suit} />}
          <CardBack />
        </>
      ) : (
        cards.map((card) => (
          <Card
            key={`${card.rank}-${card.suit}`}
            rank={card.rank}
            suit={card.suit}
          />
        ))
      )}
    </div>
  );
}
