import { Action, createReducer, on } from '@ngrx/store';
import * as MyWalletActions from './my-wallet.actions';

export const myWalletFeatureKey = 'myWalletFeature';

export interface State {
  stockList: string[];
  cryptoList: string[];
}
export const initialState: State = {
  stockList: ['GOOGL', 'AAPL', 'MSFT', 'DIS'],
  cryptoList: ['BTC', 'LTC', 'ETH']
};

const myWalletReducer = createReducer(
  initialState,
  on(MyWalletActions.resetAssets, state => ({ stockList: [], cryptoList: [] })),
  on(MyWalletActions.setAssets, (state, { newAssets }) => ({ stockList: newAssets.stockList, cryptoList: newAssets.cryptoList }))
);

export function reducer(state: State | undefined, action: Action) {
  return myWalletReducer(state, action);
}
