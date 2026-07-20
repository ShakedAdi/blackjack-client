import type { Card as CardType } from '../../types';
import styles from './Card.module.css';

export function Card({ rank, suit }: CardType) {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImg}
        src={`${rank.toLowerCase()}-${suit}.png`}
        alt={`${rank} of ${suit}`}
      />
    </div>
  );
}
