import { createAction, props } from '@ngrx/store';
import { State } from './stock.reducer';

export const resetAssets = createAction('[Stock Page] Assets Reset');
export const setAssets = createAction('[Stock Page] Set Assets', props<{newAssets: State}>());
export const addToTableList = createAction('[Stock Page] Add To TableList', props<{newItem: string}>());
export const addToCardList = createAction('[Stock Page] Add To Card List', props<{newItem: string}>());
