import { createAction, props } from '@ngrx/store';
import { State } from './my-wallet.reducer';

export const resetAssets = createAction('[My Wallet Page] Assets Reset');
export const setAssets = createAction('[My Wallet Page] Set Assets', props<{newAssets: State}>());
export const addStock = createAction('[My Wallet Page] Add Stock', props<{newStock: string}>());
export const addCrypto = createAction('[My Wallet Page] Add Crypto', props<{newCrypto: string}>());
