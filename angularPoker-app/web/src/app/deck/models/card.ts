export enum Suit {
    Spades = "S",
    Diamonds = "D",
    Hearts = "H",
    Clubs = "C"
}

export enum Pip {
    Ace = "A",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "T",
    Jack = "J",
    Queen = "Q",
    King = "K"
}

export interface Card {
        rank: Pip
    suit: Suit
    image?: string
}
