import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, authFeatureKey } from "./auth.reducer";

export const getState = createFeatureSelector<State>(authFeatureKey);

export const selectUser = createSelector(
  getState,
  (state: State) => state.user
);

export const isLoggedIn = createSelector(
  getState,
  (state: State) => state.user !== undefined
);

export const isLoggedOut = createSelector(
  getState,
  (state: State) => state.user === undefined
);
