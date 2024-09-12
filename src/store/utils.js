function calculateExpectedScore(ratingPlayer, ratingOpponent) {
    return 1 / (1 + Math.pow(10, (ratingOpponent - ratingPlayer) / 400));
}
function calculateNewRating(oldRating, expectedScore, actualScore, kFactor = 40) {
    let rating =Math.round(oldRating + kFactor * (actualScore - expectedScore))
    return rating >= 0 ? rating : 0;
}
export default function updateEloRatings(winnerMMR, looserMMR) {
    let initWinMMR = winnerMMR || 1000;
    let initLosMMR = looserMMR || 1000;
    // Calculate expected scores for both players
    const winnerExpectedScore = calculateExpectedScore(initWinMMR, initLosMMR);
    const looserExpectedScore = calculateExpectedScore(initLosMMR, initWinMMR);

    // Update ratings based on the result (1 if player 1 wins, 0 if player 2 wins)
    const winnerNewMMR = calculateNewRating(initWinMMR, winnerExpectedScore, 1);
    const looserNewMMR = calculateNewRating(initLosMMR, looserExpectedScore, 0);

    return {
        winnerNewMMR,
        looserNewMMR
    };
}