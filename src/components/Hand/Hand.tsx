import type { Hand as HandType } from "../../types";
import { Card } from "../Card/Card";
import styles from './Hand.module.css'

export function Hand({ cards, bet }: HandType) {
    return (
        <div className={styles.handContainer}>
            <p className={styles.betLabel}>Bet: {bet}</p>
            <div className={styles.cardsContainer}>
                {cards.map(card => <Card key={`${card.rank}-${card.suit}`} rank={card.rank} suit={card.suit}/>)}
            </div>
        </div>
    );
}