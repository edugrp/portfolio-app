import { createAction, props } from '@ngrx/store';
import { State } from './my-wallet.reducer';

export const resetAssets = createAction('[My Wallet Page] Assets Reset');
export const setAssets = createAction('[My Wallet  Page] Set Assets', props<{newAssets: State}>());
