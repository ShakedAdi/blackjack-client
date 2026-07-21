import { HandOutcome, type Hand as HandType } from '../../types';
import { Card } from '../Card/Card';
import styles from './Hand.module.css';

export function Hand({ cards, bet, outcome = undefined }: HandType) {
  return (
    <div className={styles.handContainer}>
      {outcome === HandOutcome.Win ? (
        <p className={styles.winLabel}>Win</p>
      ) : outcome === HandOutcome.Loss ? (
        <p className={styles.lossLabel}>Loss</p>
      ) : (
        outcome === HandOutcome.Push && <p className={styles.pushLabel}>Push</p>
      )}
      <p className={styles.betLabel}>Bet: {bet}</p>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card
            key={`${card.rank}-${card.suit}`}
            rank={card.rank}
            suit={card.suit}
          />
        ))}
      </div>
    </div>
  );
}
