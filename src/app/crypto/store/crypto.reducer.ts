import { Action, createReducer, on } from '@ngrx/store';
import * as CryptoActions from './crypto.actions';
import { Quote } from '@core/models/asset';

export const cryptoFeatureKey = 'cryptoFeature';

export interface State {
  tableList: Quote[];
  cardList: Quote[];
}
export const initialState: State = {
  tableList: [], // 'BTC', 'LTC'
  cardList: [] // 'BTC', 'LTC', 'DOGE', 'ETH', 'XRP'
};

const cryptoReducer = createReducer(
  initialState,
  on(CryptoActions.resetAssets, state => ({ tableList: [], cardList: [] })),
  on(CryptoActions.setAssets, (state, { tableList, cardList }) => ({ tableList, cardList })),
  on(CryptoActions.addToTableList, (state, { newItem }) => ({
    tableList: [...state.tableList, newItem],
    cardList: [...state.cardList]
  })),
  on(CryptoActions.addToCardList, (state, { newItem }) => ({
    tableList: [...state.tableList],
    cardList: [...state.cardList, newItem]
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return cryptoReducer(state, action);
}
