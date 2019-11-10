import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, stockFeatureKey } from './stock.reducer';

export const getState = createFeatureSelector(stockFeatureKey);

export const selectTableList = createSelector(
  getState,
  (state: State) => state.tableList
);

export const selectCardList = createSelector(
  getState,
  (state: State) => state.cardList
);
