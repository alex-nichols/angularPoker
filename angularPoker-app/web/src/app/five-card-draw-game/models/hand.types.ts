
export enum HandTypes  {
    RoyalFlush,    // 0
    StraightFlush, // 1
    FourOfAKind,   // 2
    FullHouse,     // 3
    Flush,         // 4
    Straight,      // 5
    ThreeOfAKind,  // 6
    TwoPairs,      // 7
    Pair,          // 8
    highestCard    // 9
}

export const HandTypeStrings: { [id: number]: string; } = {
    [HandTypes.RoyalFlush]: 'Royal Flush',
    [HandTypes.StraightFlush]: 'Straight Flush',
    [HandTypes.FourOfAKind]: 'Four Of A Kind',
    [HandTypes.FullHouse]: 'Full House',
    [HandTypes.Flush]: 'Flush',
    [HandTypes.Straight]: 'Straight',
    [HandTypes.ThreeOfAKind]: 'Three Of A Kind',
    [HandTypes.TwoPairs]: 'Two Pairs',
    [HandTypes.Pair]: "Jack's or Better",
    [HandTypes.highestCard]: ''
}
