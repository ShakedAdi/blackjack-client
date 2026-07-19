import { Card } from "../../components/Card/Card";
import { CardBack } from "../../components/Card/CardBack";
import { Deck } from "../../components/Deck/Deck";
import { Hand } from "../../components/Hand/Hand";
import { PlayerHands } from "../../components/PlayerHands/PlayerHands";
import { DealerHand } from "../../components/DealerHand/DealerHand";

export function Play() {
  return (
    <>
      <Card rank="A" suit="hearts"/>
      <CardBack/>
      <Deck/>
      <Hand cards={[{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},]}/>
      <PlayerHands hands={
        [
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
        ]
      }/>
      <DealerHand
        cards={[
          {rank: "6", suit: "clubs"},
          {rank: "4", suit: "diamonds"}
        ]}
        isHoleCardHidden={true}
      />
    </>
  );
}
