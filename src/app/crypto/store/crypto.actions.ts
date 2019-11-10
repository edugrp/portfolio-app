import { createAction, props } from '@ngrx/store';
import { State } from './crypto.reducer';

export const resetAssets = createAction('[Crypto Page] Assets Reset');
export const setAssets = createAction('[Crypto  Page] Set Assets', props<{newAssets: State}>());
