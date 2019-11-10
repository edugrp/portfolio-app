import { Action, createReducer, on } from '@ngrx/store';
import * as StockActions from './stock.actions';

export const stockFeatureKey = 'stockFeature';

export interface State {
  tableList: string[];
  cardList: string[];
}
export const initialState: State = {
  tableList: ['GOOGL', 'AAPL', 'MSFT', 'FB'],
  cardList: ['GOOGL', 'AMD', 'AAPL', 'F', 'MCD', 'BKNG', 'FB']
};

const stockReducer = createReducer(
  initialState,
  on(StockActions.resetAssets, state => ({ tableList: [], cardList: [] })),
  on(StockActions.setAssets, (state, { newAssets }) => ({ tableList: newAssets.tableList, cardList: newAssets.cardList })),
  on(StockActions.addToTableList, (state, { newItem }) => ({
    tableList: [...state.tableList, newItem],
    cardList: [...state.cardList]
  })),
  on(StockActions.addToCardList, (state, { newItem }) => ({
    tableList: [...state.tableList],
    cardList: [...state.cardList, newItem]
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return stockReducer(state, action);
}
