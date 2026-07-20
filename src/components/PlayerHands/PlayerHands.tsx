import type { Hand as HandType} from "../../types";
import { Hand } from "../Hand/Hand";
import styles from './PlayerHands.module.css'

interface PlayerHandsProps {
    hands: HandType[]
}

export function PlayerHands({ hands }: PlayerHandsProps) {
    return (
        <div className={styles.playerContainer}>
            {hands.map((hand, index) => <Hand key={index} {...hand}/>)}
        </div>
    );
}