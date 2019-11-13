import { createAction, props } from '@ngrx/store';
import { Quote } from '@core/models/asset';


export const resetAssets = createAction('[My Wallet Page] Assets Reset');
export const setAssets = createAction('[My Wallet Page] Set Assets', props<{stockList: Quote[], cryptoList: Quote[] }>());
export const addStock = createAction('[My Wallet Page] Add Stock', props<{newStock: Quote}>());
export const addCrypto = createAction('[My Wallet Page] Add Crypto', props<{newCrypto: Quote}>());
export const addStockStarted = createAction('[My Wallet Page] Add Stock Started', props<{symbol: string}>());
export const addCryptoStarted = createAction('[My Wallet Page] Add Crypto Started', props<{symbol: string}>());
