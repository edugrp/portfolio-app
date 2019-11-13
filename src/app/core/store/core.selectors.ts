import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, coreFeatureKey } from './core.reducer';

export const getState = createFeatureSelector<State>(coreFeatureKey);

export const selectStockList = createSelector(
  getState,
  (state: State) => state.stockList
);

export const selectCryptoList = createSelector(
  getState,
  (state: State) => state.cryptoList
);
