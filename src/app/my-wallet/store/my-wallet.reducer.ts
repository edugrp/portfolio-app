import { Action, createReducer, on } from '@ngrx/store';
import * as MyWalletActions from './my-wallet.actions';
import { Quote } from '@core/models/asset';

export const myWalletFeatureKey = 'myWalletFeature';

export interface State {
  stockList: Quote[];
  cryptoList: Quote[];
}
export const initialState: State = {
  stockList: [], // 'GOOGL', 'AAPL', 'MSFT', 'DIS'
  cryptoList: [] // 'BTC', 'LTC', 'ETH'
};

const myWalletReducer = createReducer(
  initialState,
  on(MyWalletActions.resetAssets, state => ({ stockList: [], cryptoList: [] })),
  on(MyWalletActions.setAssets, (state, { stockList, cryptoList }) => ({ stockList, cryptoList })),
  on(MyWalletActions.addStock, (state, { newStock }) => ({
    stockList: [...state.stockList, newStock],
    cryptoList: [...state.cryptoList]
  })),
  on(MyWalletActions.addCrypto, (state, { newCrypto }) => ({
    stockList: [...state.stockList],
    cryptoList: [...state.cryptoList, newCrypto]
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return myWalletReducer(state, action);
}
