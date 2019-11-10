import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, myWalletFeatureKey } from './my-wallet.reducer';

export const getState = createFeatureSelector<State>(myWalletFeatureKey);

export const selectStockList = createSelector(
  getState,
  (state: State) => state.stockList
);

export const selectCryptoList = createSelector(
  getState,
  (state: State) => state.cryptoList
);
