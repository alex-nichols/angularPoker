import { Action } from '@ngrx/store';
import { Account } from '../../models/account.model';
import { Transaction } from '../../models/transaction.model';

export enum AccountActionTypes {
  LoadAccount = '[Account] Load Account',
  AccountLoaded = '[Account] Account Loaded',
  ProcessTransaction = '[Account] Process Transaction',
  TransactionProcessed = '[Account] Transaction Processed',
  TransactionError = '[Account] Transaction Error'
}

export class LoadAccount implements Action {
  readonly type = AccountActionTypes.LoadAccount;

  constructor(public payload: {uid: string}) { }
}

export class AccountLoaded implements Action {
  readonly type = AccountActionTypes.AccountLoaded;

  constructor(public payload: {account: Account}) { }
}

export class ProcessTransaction implements Action {
  readonly type = AccountActionTypes.ProcessTransaction;

  constructor(public payload: {account: Transaction}) { }
}

export class TransactionProcessed implements Action {
  readonly type = AccountActionTypes.TransactionProcessed;

  constructor(public payload: {account: Transaction}) { }
}

export class TransactionError implements Action {
  readonly type = AccountActionTypes.TransactionError;

  constructor(public payload: {account: Transaction}) { }
}


export type AccountActions = LoadAccount
                           | AccountLoaded
                           | ProcessTransaction
                           | TransactionProcessed
                           | TransactionError;
