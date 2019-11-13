import { createAction, props } from '@ngrx/store';
import { Asset } from '@core/models/asset';

export const resetAssets = createAction('[Core Module] Assets Reset');
export const setStockList = createAction('[Core Module] Set Stock List', props<{payload: Asset[]}>());
export const setCryptoList = createAction('[Core Module] Set Crypto List', props<{payload: Asset[]}>());
export const loadStockList = createAction('[Core Module] Load Stock List');
export const loadCryptoList = createAction('[Core Module] Load Crypto List');
