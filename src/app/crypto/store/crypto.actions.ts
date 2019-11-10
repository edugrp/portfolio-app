import { createAction, props } from '@ngrx/store';
import { State } from './crypto.reducer';

export const resetAssets = createAction('[Crypto Page] Assets Reset');
export const setAssets = createAction('[Crypto Page] Set Assets', props<{newAssets: State}>());
export const addToTableList = createAction('[Crypto Page] Add To TableList', props<{newItem: string}>());
export const addToCardList = createAction('[Crypto Page] Add To Card List', props<{newItem: string}>());
