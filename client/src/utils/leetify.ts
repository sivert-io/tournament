import { Leetify, MappedLeetifyData } from "@/types/leetify";

export function mapLeetifyData(data: Leetify) {
    const mapped:MappedLeetifyData = {
        rating: 0,
        skill: {
            aim: 0,
            positioning: 0,
            utility: 0,
            gamesPlayed: 0,
            leetifyRatingRounds: 0,
            clutch: 0,
            ctLeetify: 0,
            leetify: 0,
            opening: 0,
            tLeetify: 0
        }
    }

    mapped.skill = data.recentGameRatings;
    mapped.rating = data.games.find((game) => game.rankType === 11)?.skillLevel || 0
    return mapped;
}