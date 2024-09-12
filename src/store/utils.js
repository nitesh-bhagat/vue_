function calculateExpectedScore(ratingPlayer, ratingOpponent) {
    return 1 / (1 + Math.pow(10, (ratingOpponent - ratingPlayer) / 400));
}
function calculateNewRating(oldRating, expectedScore, actualScore, kFactor = 32) {
    return oldRating + kFactor * (actualScore - expectedScore);
}
export default function updateEloRatings(winnerMMR, looserMMR) {
    // Calculate expected scores for both players
    const winnerExpectedScore = calculateExpectedScore(winnerMMR, looserMMR);
    const looserExpectedScore = calculateExpectedScore(looserMMR, winnerMMR);

    // Update ratings based on the result (1 if player 1 wins, 0 if player 2 wins)
    const winnerNewMMR = calculateNewRating(winnerMMR, winnerExpectedScore, 1);
    const looserNewMMR = calculateNewRating(looserMMR, looserExpectedScore, 0);

    return {
        winnerNewMMR,
        looserNewMMR
    };
}