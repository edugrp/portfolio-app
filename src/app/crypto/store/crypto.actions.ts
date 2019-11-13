import { createAction, props } from '@ngrx/store';
import { Quote } from '@core/models/asset';

export const resetAssets = createAction('[Crypto Page] Assets Reset');
export const setAssets = createAction('[Crypto Page] Set Assets', props<{tableList: Quote[], cardList: [Quote]}>());
export const addToTableList = createAction('[Crypto Page] Add To TableList', props<{newItem: Quote}>());
export const addToCardList = createAction('[Crypto Page] Add To Card List', props<{newItem: Quote}>());
export const addToTableListStarted = createAction('[Crypto Page] Add To TableList Started', props<{symbol: string}>());
export const addToCardListStarted = createAction('[Crypto Page] Add To Card List Started', props<{symbol: string}>());
