import { Action, createReducer, on } from "@ngrx/store";
import * as CoreActions from "./core.actions";
import { Asset } from "@core/models/asset";

export const coreFeatureKey = "coreFeature";

export interface State {
  stockList: Asset[];
  cryptoList: Asset[];
}
export const initialState: State = {
  stockList: [],
  cryptoList: []
};

const coreReducer = createReducer(
  initialState,
  on(CoreActions.resetAssets, state => ({ stockList: [], cryptoList: [] })),
  on(CoreActions.setStockList, (state, { payload }) => ({
    ...state,
    stockList: payload
  })),
  on(CoreActions.setCryptoList, (state, { payload }) => ({
    ...state,
    cryptoList: payload
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return coreReducer(state, action);
}
