import { useState } from "react";
import { ActionButtons } from "../../components/ActionButtons/ActionButtons";
import { Deck } from "../../components/Deck/Deck";
import { PlayerHands } from "../../components/PlayerHands/PlayerHands";
import { type Hand as HandType, type DealerHand as DealerHandType } from "../../types";
import styles from "./Play.module.css";
import { DealerHand } from "../../components/DealerHand/DealerHand";

export function Play() {
  const [balance, setBalance] = useState<number>(1000);
  const [dealerHand, setDealerHand] = useState<DealerHandType>({cards: [{rank: "10", suit: "spades"}, {rank: "J", suit: "spades"}], isHoleCardHidden: true});
  const [playerHands, setPlayerHands] = useState<HandType[]>([
    {
      cards: [
        {rank: "A", suit: "hearts"}, 
        {rank: "10", suit: "clubs"}, 
        {rank: "K", suit: "hearts"}
      ],
      bet: 100
    },
    {
      cards: [
        {rank: "5", suit: "hearts"}, 
        {rank: "5", suit: "clubs"},
      ],
      bet: 100
    },
    {
      cards: [
        {rank: "2", suit: "hearts"}, 
        {rank: "2", suit: "clubs"}, 
        {rank: "2", suit: "spades"},
        {rank: "2", suit: "diamonds"}
      ],
      bet: 100
    },
    {
      cards: [
        {rank: "6", suit: "clubs"}, 
        {rank: "4", suit: "diamonds"}
      ],
      bet: 100
    },
  ]);
  
  return (
    <div className={styles.board}>
      <p className={styles.balance}>Balance: {balance}</p>
      <div className={styles.dealerHand}>
        <DealerHand cards={dealerHand.cards} isHoleCardHidden={dealerHand.isHoleCardHidden}/>
      </div>
      <div className={styles.deck}>
        <Deck/>
      </div>
      <div className={styles.actionButtons}>
        <ActionButtons
          onHit={() => console.log("Hit clicked")}
          onDouble={() => console.log("Double clicked")}
          onSplit={() => console.log("Split clicked")}
          onStand={() => console.log("Stand clicked")}
        />
      </div>
      <div className={styles.playerHands}>
        <PlayerHands hands={playerHands}/>
      </div>
    </div>
  );
}
