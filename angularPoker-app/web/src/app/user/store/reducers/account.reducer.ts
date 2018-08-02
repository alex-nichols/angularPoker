import { AccountActions, AccountActionTypes } from '../actions/account.actions';
import { Account } from '../../models/account.model'

export interface State {
  account: Account
}

export const initialState: State = {
  account: {
    transactions: [],
    accountBalance: 0
  }
};

export function reducer(state = initialState, action: AccountActions): State {
  switch (action.type) {

    case AccountActionTypes.AccountLoaded:
      return {...state,
              account: action.payload.account
            };

    case AccountActionTypes.LoadAccount:
      return state;

     case AccountActionTypes.ProcessTransaction:
      return state;

     case AccountActionTypes.TransactionProcessed:
      return state;

     case AccountActionTypes.TransactionError:
      return state;


    default:
      return state;
  }
}
