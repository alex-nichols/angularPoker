import { Transaction } from "./transaction.model";

export interface Account {
    accountBalance: number,
    transactions: Transaction[]
}
