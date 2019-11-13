import { createAction, props } from '@ngrx/store';
import { Quote } from '@core/models/asset';

export const resetAssets = createAction('[Stock Page] Assets Reset');
export const setAssets = createAction('[Stock Page] Set Assets', props<{tableList: Quote[], cardList: [Quote]}>());
export const addToTableList = createAction('[Stock Page] Add To TableList', props<{newItem: Quote}>());
export const addToCardList = createAction('[Stock Page] Add To Card List', props<{newItem: Quote}>());
export const addToTableListStarted = createAction('[Stock Page] Add To TableList Started', props<{symbol: string}>());
export const addToCardListStarted = createAction('[Stock Page] Add To Card List Started', props<{symbol: string}>());
