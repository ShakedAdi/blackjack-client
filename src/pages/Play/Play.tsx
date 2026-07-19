import { useState } from "react";
import { Deck } from "../../components/Deck/Deck";
import { PlayerHands } from "../../components/PlayerHands/PlayerHands";
import { type Hand as HandType, type DealerHand as DealerHandType } from "../../types";
import styles from "./Play.module.css";
import { DealerHand } from "../../components/DealerHand/DealerHand";

export function Play() {
  const [dealerHand, setDealerHand] = useState<DealerHandType>({cards: [{rank: "10", suit: "spades"}, {rank: "J", suit: "spades"}], isHoleCardHidden: true});
  const [playerHands, setPlayerHands] = useState<HandType[]>([
    {
      cards: [
        {rank: "A", suit: "hearts"}, 
        {rank: "10", suit: "clubs"}, 
        {rank: "K", suit: "hearts"}
      ]
    },
    {
      cards: [
        {rank: "5", suit: "hearts"}, 
        {rank: "5", suit: "clubs"},
      ]
    },
    {
      cards: [
        {rank: "2", suit: "hearts"}, 
        {rank: "2", suit: "clubs"}, 
        {rank: "2", suit: "spades"},
        {rank: "2", suit: "diamonds"}
      ]
    },
    {
      cards: [
        {rank: "6", suit: "clubs"}, 
        {rank: "4", suit: "diamonds"}
      ]
    },
  ]);
  
  return (
    <div className={styles.board}>
      <div className={styles.dealerHand}>
        <DealerHand cards={dealerHand.cards} isHoleCardHidden={dealerHand.isHoleCardHidden}/>
      </div>
      <div className={styles.deck}>
        <Deck/>
      </div>
      <div className={styles.playerHands}>
        <PlayerHands hands={playerHands}/>
      </div>
    </div>
  );
}
