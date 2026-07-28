import type { Hand as HandType } from "../../types";
import { Card } from "../Card/Card";
import styles from './Hand.module.css'

export function Hand({ cards }: HandType) {
    return (
        <div className={styles.handContainer}>
            {cards.map(card => <Card key={`${card.rank}-${card.suit}`} rank={card.rank} suit={card.suit}/>)}
        </div>
    );
}