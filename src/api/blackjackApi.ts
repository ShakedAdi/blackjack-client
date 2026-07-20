import type { Card, GameState, Hand, ResolvedHandStatus } from "../types";

const BASE_URL = "http://localhost:42069";

export interface CreateGameResponse {
    gameId: string;
    dealersCard: Card;
    playersHand: Hand;
    balance: number;
}

export async function createGame(bet: number): Promise<CreateGameResponse> {
    const response = await fetch(`${BASE_URL}/new-game`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bet }),
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }

    return response.json();
}

export interface NewRoundResponse {
    dealersCard: Card;
    playersHand: Hand;
    balance: number;
}

export async function newRound(gameId: string, bet: number): Promise<NewRoundResponse> {
    const response = await fetch(`${BASE_URL}/games/${gameId}/new-round`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bet }),
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }

    return response.json();
}

export interface DealtCardResponse {
    newCard: Card;
    status: ResolvedHandStatus;
}

export async function hit(gameId: string): Promise<DealtCardResponse> {
    const response = await fetch(`${BASE_URL}/games/${gameId}/hit`, {
        method: "POST",
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }

    return response.json();
}

export async function double(gameId: string): Promise<DealtCardResponse> {
    const response = await fetch(`${BASE_URL}/games/${gameId}/double`, {
        method: "POST",
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }

    return response.json();
}

export interface SplitResponse {
    firstHandCards: Card[];
    firstHandStatus: ResolvedHandStatus;
    secondHandCards: Card[];
    secondHandStatus: ResolvedHandStatus;
}

export async function split(gameId: string): Promise<SplitResponse> {
    const response = await fetch(`${BASE_URL}/games/${gameId}/split`, {
        method: "POST",
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }

    return response.json();
}

export async function stand(gameId: string): Promise<void> {
    const response = await fetch(`${BASE_URL}/games/${gameId}/stand`, {
        method: "POST",
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }
}

export async function deleteGame(gameId: string): Promise<void> {
    const response = await fetch(`${BASE_URL}/games/${gameId}/delete`, {
        method: "POST",
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }
}

export interface GameStateResponse {
    state: GameState;
    isHoleCardHidden: boolean;
    player: Hand[];
    dealer: Card[];
    balance: number;
}

export async function getGameState(gameId: string): Promise<GameStateResponse> {
    const response = await fetch(`${BASE_URL}/games/${gameId}`);

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }

    return response.json();
}

