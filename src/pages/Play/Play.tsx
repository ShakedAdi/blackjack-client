import { ActionButtons } from "../../components/ActionButtons/ActionButtons";
import { Deck } from "../../components/Deck/Deck";
import { PlayerHands } from "../../components/PlayerHands/PlayerHands";
import { useGame } from "../../hooks/useGame";
import styles from "./Play.module.css";
import { DealerHand } from "../../components/DealerHand/DealerHand";
import { GameState } from "../../types";
import { NewRoundButton } from "../../components/NewRoundButton/NewRoundButton";
import { useState } from "react";

export function Play() {
  const {
    balance,
    dealerHand,
    playerHands,
    roundState,
    error,
    placeBet,
    hit,
    stand,
    double,
    split,
    canHit,
    canStand,
    canDouble,
    canSplit,
  } = useGame();

  const [startNewRound, setStartNewRound] = useState<boolean>(false);

  return (
    <div className={styles.board}>
      <p className={styles.balance}>Balance: {balance}</p>
      {error && <p className={styles.error}>{error}</p>}
      {roundState && !startNewRound
      ? <>
        <div className={styles.dealerHand}>
          <DealerHand cards={dealerHand.cards} isHoleCardHidden={dealerHand.isHoleCardHidden}/>
        </div>
        <div className={styles.deck}>
          <Deck/>
        </div>
        <div className={styles.actionButtons}>
          {roundState === GameState.RoundOver ? <NewRoundButton onClick={() => setStartNewRound(true)}/>: <ActionButtons
            onHit={hit}
            onDouble={double}
            onSplit={split}
            onStand={stand}
            isHitDisabled={!canHit}
            isStandDisabled={!canStand}
            isDoubleDisabled={!canDouble}
            isSplitDisabled={!canSplit}
          />}
        </div>
        <div className={styles.playerHands}>
          <PlayerHands hands={playerHands}/>
        </div>
      </>
      : <input
          type="number"
          className={styles.betInput}
          placeholder="Enter your bet"
          min={1}
          max={balance}
          onKeyDown={async (e) => {
            if (e.key !== "Enter") return;
            const input = e.currentTarget;
            if (input.value === "" || !input.checkValidity()) return;
            await placeBet(Number(input.value));
            setStartNewRound(false);
          }}
        />
      }
    </div>
  );
}
