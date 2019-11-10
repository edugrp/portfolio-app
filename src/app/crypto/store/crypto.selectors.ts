import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, cryptoFeatureKey } from './crypto.reducer';

export const getState = createFeatureSelector<State>(cryptoFeatureKey);

export const selectTableList = createSelector(
  getState,
  (state: State) => state.tableList
);

export const selectCardList = createSelector(
  getState,
  (state: State) => state.cardList
);
