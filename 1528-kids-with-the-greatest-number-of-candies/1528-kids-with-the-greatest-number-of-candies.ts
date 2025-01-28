function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandies = Math.max(...candies);
    const isPossible = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            isPossible.push(true);
        } else {
            isPossible.push(false);
        }
    }
    return isPossible;
};