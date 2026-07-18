import type { Rank, Suit } from "../../types";
import styles from './Card.module.css'

interface CardProps {
  rank: Rank;
  suit: Suit;
}
export function Card({ rank, suit }: CardProps) {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImg} src={`${rank.toLowerCase()}-${suit}.png`} alt={`${rank} of ${suit}`}/>
        </div>
    );
}