# Elo rating system for multiple players

The ELO rating system for multiple players written in JavaScript. In contrast to the method created by Arpad Elo, this script allows to determine ELO changes of more than two players.

# Usage

## Basic
Let's assume that 5 players just finished playing a game. It wasn't their first meeting what means that every single of them had different ELO at the beginning.

    let player01 = 850
    let player02 = 900
    let player03 = 1100
    let player04 = 990
    let player05 = 1230

    // Let's assume that they finished in that order: player03, player01, player02, player05, player04.
    const currentRatings = [player03, player01, player02, player05, player04];

    // getEloRatings will return an array with new ratings in order displayed above.
    const newRatings = getEloRatings(currentRatings);

## Advanced
    getEloRating(ratings, k, base)
getEloRatings takes two additional variables. The letter k is the so-called K-factor described in [Elo rating system wikipedia page](https://en.wikipedia.org/wiki/Elo_rating_system#Most_accurate_K-factor). Base variable allows for making returned ratings exponential what helps when we want to reward players that finished at the top more.

![comparison of three different score functions for N = 5 players](https://miro.medium.com/max/700/1*zDbzrYMWYdISkFluLQH4pQ.png)\
*Comparison of three different score functions for N = 5 players*

# Credits

Based on [Developing a Generalized Elo Rating System for Multiplayer Games](https://towardsdatascience.com/developing-a-generalized-elo-rating-system-for-multiplayer-games-b9b495e87802) article by [Danny Cunningham](https://medium.com/@djcunningham0).