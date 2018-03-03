import { Card } from '../../deck/models/card';

export interface PlayerCard extends Card {
    onHold: boolean
}