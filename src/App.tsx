import { useEffect, useState } from "react";
import './App.css';
import { Card } from "./components/Card/Card";
import { CardBack } from "./components/Card/CardBack";
import { Deck } from "./components/Deck/Deck";
import { Hand } from "./components/Hand/Hand";
import { Player } from "./components/Player/Player";

interface Status {
  isRunning: boolean;
}

function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    async function fetchServerStatus() {
      const response = await fetch("http://localhost:42069/status/");
      const status: Status = await response.json();
      setIsRunning(status.isRunning);
    }

    fetchServerStatus();
  }, []);

  return (
    <>
      <p className="server-status">Server Status: {isRunning ? "UP" : "DOWN"}</p>
      <Card rank="A" suit="hearts"/>
      <CardBack/>
      <Deck/>
      <Hand cards={[{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},{rank: "A", suit: "hearts"}, {rank: "10", suit: "clubs"}, {rank: "K", suit: "hearts"},]}/>
      <Player hands={
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
    </>
  );
}

export default App
