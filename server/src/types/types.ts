export type Player = {
    name: string;
    steam64: string;
    avatar: string;
    id: string;
    rating: number;
}

export interface Team {
    name: string;
    players: Player[];
}