import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { User } from "@core/models/user";

export const authFeatureKey = "authFeature";

export interface State {
  user: User;
}
export const initialState: State = {
  user: undefined
};

const cryptoReducer = createReducer(
  initialState,
  on(AuthActions.logout, state => initialState),
  on(AuthActions.login, (state, { user }) => ({ user }))
);

export function reducer(state: State | undefined, action: Action) {
  return cryptoReducer(state, action);
}
