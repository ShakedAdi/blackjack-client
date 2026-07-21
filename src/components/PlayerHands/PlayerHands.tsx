import { HandStatus, type Hand as HandType } from '../../types';
import { Hand } from '../Hand/Hand';
import styles from './PlayerHands.module.css';

interface PlayerHandsProps {
  hands: HandType[];
}

export function PlayerHands({ hands }: PlayerHandsProps) {
  const playingHandIndex = hands.findIndex(
    (hand) => hand.status === HandStatus.Playing,
  );
  return (
    <div className={styles.playerContainer}>
      {hands.map((hand, index) =>
        hands.length > 1 && playingHandIndex === index ? (
          <div className={styles.playingHand}>
            <Hand key={index} {...hand} />
          </div>
        ) : (
          <Hand key={index} {...hand} />
        ),
      )}
    </div>
  );
}
