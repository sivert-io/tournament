interface AverageRank {
    dataSource: string;
    skillLevel: number;
}

interface Club {
    averageRanks: AverageRank[];
    id: string;
    name: string;
    tag: string;
    winRate: number;
}

interface Highlight {
    createdAt: string;
    description: string;
    gameId: string;
    id: string;
    isPinned: boolean;
    pendingPro: boolean;
    rankValue: null;
    roundNumber: number;
    steam64Id: string;
    thumbnailUrl: string;
    url: string;
    username: string;
}

interface PersonalBest {
    gameId: string;
    skillId: string;
    value: string;
}

interface RecentGameRatings {
    aim: number;
    positioning: number;
    utility: number;
    gamesPlayed: number;
    leetifyRatingRounds: number;
    clutch: number;
    ctLeetify: number;
    leetify: number;
    opening: number;
    tLeetify: number;
}

interface Rank {
    type: string;
    dataSource: string;
    skillLevel: number;
}

interface Teammate {
    isCollector: boolean;
    isProPlan: boolean;
    leetifyUserId?: string;
    club?: {
        name: string;
        tag: string;
    };
    isBanned: boolean;
    isLeetifyStaff: boolean;
    matchesPlayedTogether: number;
    profileUserLeetifyRating: number;
    rank?: Rank;
    steam64Id: string;
    steamAvatarUrl: string;
    steamNickname: string;
    teammateLeetifyRating: number;
    winRateTogether: number;
}

interface Game {
    enemyTeamSteam64Ids: string[];
    isCompletedLongMatch: boolean;
    ownTeamSteam64Ids: string[];
    ownTeamTotalLeetifyRatingRounds: { [key: string]: number };
    ownTeamTotalLeetifyRatings: { [key: string]: number };
    ctLeetifyRating: number;
    ctLeetifyRatingRounds: number;
    dataSource: string;
    elo: any;
    gameFinishedAt: string;
    gameId: string;
    isCs2: boolean;
    mapName: string;
    matchResult: string;
    rankType: number;
    scores: number[];
    skillLevel: number;
    tLeetifyRating: number;
    tLeetifyRatingRounds: number;
    deaths: number;
    hasBannedPlayer: boolean;
    kills: number;
    partySize: number;
}

export interface Leetify {
    club: Club;
    highlights: Highlight[];
    personalBestsCs2: PersonalBest[];
    personalBestsCsgo: any[];
    recentGameRatings: RecentGameRatings;
    teammates: Teammate[];
    games: Game[];
}

export interface MappedLeetifyData {
    rating: number,
    skill: RecentGameRatings
}