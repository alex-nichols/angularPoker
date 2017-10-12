export enum Suit {
    Spades,
    Diamonds,
    Hearts,
    Clubs
}

export enum Pips {
    One,
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
    rank: number
    suit: Suit
    image?: string
}
