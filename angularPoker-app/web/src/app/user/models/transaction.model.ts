export enum TransactionType {
    Deposit,
    Withdrawal
}

export interface Transaction {
    date: Date,
    amount: number,
    transactionType: TransactionType
}
