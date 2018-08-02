import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.model';
import { TransactionType } from '../models/transaction.model';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {
  }

  public loadAccount(uid: string): Observable<Account> {
    const date = new Date()
    date.setDate(date.getDate() - 2);
    return of<Account>({
      accountBalance: 100,
      transactions: [
        {
          date: date,
          amount: 0,
          transactionType: TransactionType.Deposit
        }
      ]}).pipe(delay(1000))
  }
}
