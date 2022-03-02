export function getEloRatings(ratings, k, base) {
    const d = 400
    const playersAmount = ratings.length

    k = k || 32
    base = base || 1

    let playersPropabilities = []
    let scoreForEachPlacementPosition = []
    let newEloRatings = []

    let sumOfPlayersPropabilities = (playersAmount * (playersAmount - 1)) / 2

    ratings.forEach((currentPlayerRating, i) => {
        let currentPlayerWinPropability = 0
        ratings.forEach((rating, j) => {
            if (i === j) return
            const opponentRating = ratings[j]
            const propabilityToWinAgainstJ = 1 / (1 + Math.pow(10, (opponentRating - currentPlayerRating) / d))

            currentPlayerWinPropability += propabilityToWinAgainstJ
        })

        const scaledCurrentPlayerWinPropability = currentPlayerWinPropability / sumOfPlayersPropabilities

        playersPropabilities.push(scaledCurrentPlayerWinPropability)
    })

    if ( base > 1) {
        let exponentialDivider = 0

        for (let i = 1; i < playersAmount + 1; i++) {
            exponentialDivider += (Math.pow(base, (playersAmount - i)) - 1)
        }
    
        for (let i = 1; i < playersAmount + 1; i++) {
            const score = ((Math.pow(base, (playersAmount - i)) - 1)) / exponentialDivider
            scoreForEachPlacementPosition.push(score)
        }
    } else {
        for (let i = 1; i < playersAmount + 1; i++) {
            const score = (playersAmount - i) / ((playersAmount * (playersAmount - 1)) / 2)
            scoreForEachPlacementPosition.push(score)
        }
    }

    for (let i = 0; i < playersAmount; i++) {
        newEloRatings.push(Math.round(ratings[i] + k * (playersAmount - 1) * (scoreForEachPlacementPosition[i] - playersPropabilities[i])))
    }

    return newEloRatings
}