import type { Card as CardType } from "../../types";
import { Card } from "../Card/Card";
import styles from './Hand.module.css'

interface HandProps {
    cards: CardType[]
}

export function Hand({ cards }: HandProps) {
    return (
        <div className={styles.handContainer}>
            {cards.map(card => <Card key={`${card.rank}-${card.suit}`} rank={card.rank} suit={card.suit}/>)}
        </div>
    );
}