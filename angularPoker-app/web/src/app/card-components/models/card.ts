export enum Suit {
    Spades,
    Diamonds,
    Hearts,
    Clubs
}

export enum Pip {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King
}

export interface Card {
    rank: Pip
    suit: Suit
    image?: string
}
