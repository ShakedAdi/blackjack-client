import { useState } from "react";
import {
    createGame,
    double as doubleRequest,
    getGameState,
    hit as hitRequest,
    newRound,
    split as splitRequest,
    stand as standRequest,
} from "../api/blackjackApi";
import type { DealerHand, GameState, Hand } from "../types";

interface UseGameState {
    gameId: string | null;
    balance: number;
    dealerHand: DealerHand;
    playerHands: Hand[];
    roundState: GameState | null;
    isLoading: boolean;
    error: string | null;
}

const STARTING_BALANCE = 1000;

const initialState: UseGameState = {
    gameId: null,
    balance: STARTING_BALANCE,
    dealerHand: { cards: [], isHoleCardHidden: true },
    playerHands: [],
    roundState: null,
    isLoading: false,
    error: null,
};

export function useGame() {
    const [game, setGame] = useState<UseGameState>(initialState);

    async function refreshGameState(gameId: string): Promise<void> {
        const state = await getGameState(gameId);
        setGame(prev => ({
            ...prev,
            balance: state.balance,
            roundState: state.state,
            dealerHand: { cards: state.dealer, isHoleCardHidden: state.isHoleCardHidden },
            playerHands: state.player,
        }));
    }

    async function run(action: (gameId: string) => Promise<unknown>): Promise<void> {
        if (!game.gameId) return;
        const gameId = game.gameId;

        setGame(prev => ({ ...prev, isLoading: true, error: null }));
        try {
            await action(gameId);
            await refreshGameState(gameId);
        } catch (e) {
            setGame(prev => ({ ...prev, error: e instanceof Error ? e.message : "Unknown error" }));
        } finally {
            setGame(prev => ({ ...prev, isLoading: false }));
        }
    }

    async function placeBet(bet: number): Promise<void> {
        setGame(prev => ({ ...prev, isLoading: true, error: null }));
        try {
            if (!game.gameId) {
                const response = await createGame(bet);
                setGame(prev => ({ ...prev, gameId: response.gameId }));
                await refreshGameState(response.gameId);
            } else {
                await newRound(game.gameId, bet);
                await refreshGameState(game.gameId);
            }
        } catch (e) {
            setGame(prev => ({ ...prev, error: e instanceof Error ? e.message : "Unknown error" }));
        } finally {
            setGame(prev => ({ ...prev, isLoading: false }));
        }
    }

    const hit = () => run(hitRequest);
    const stand = () => run(standRequest);
    const double = () => run(doubleRequest);
    const split = () => run(splitRequest);

    const activeHand = game.playerHands.find(hand => hand.status === "playing");
    const canHit = !!activeHand && game.roundState === "player-turn";
    const canStand = canHit;
    const canDouble = canHit && activeHand.cards.length === 2 && game.balance >= activeHand.bet;
    const canSplit = canHit && activeHand.cards.length === 2
        && activeHand.cards[0]!.rank === activeHand.cards[1]!.rank
        && game.balance >= activeHand.bet;

    return {
        ...game,
        placeBet,
        hit,
        stand,
        double,
        split,
        canHit,
        canStand,
        canDouble,
        canSplit,
    };
}
