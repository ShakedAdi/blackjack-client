import type { Hand as HandType} from "../../types";
import { Hand } from "../Hand/Hand";
import styles from './Player.module.css'

interface PlayerProps {
    hands: HandType[]
}

export function Player({ hands }: PlayerProps) {
    return (
        <div className={styles.playerContainer}>
            {hands.map(hand => <Hand cards={hand.cards.map(card => ({rank: card.rank, suit: card.suit}))}/>)}
        </div>
    );
}