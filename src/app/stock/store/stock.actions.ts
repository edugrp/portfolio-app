import { createAction, props } from '@ngrx/store';
import { State } from './stock.reducer';

export const resetAssets = createAction('[Stock Page] Assets Reset');
export const setAssets = createAction('[Stock  Page] Set Assets', props<{newAssets: State}>());
