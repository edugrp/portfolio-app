import { createAction, props } from '@ngrx/store';
import { User } from '@core/models/user';

export const logout = createAction('[Auth Page] Logout');
export const logoutStarted = createAction('[Auth Page] Logout Started');
export const login = createAction('[Auth Page] Login', props<{ user: User }>());
export const loginStarted = createAction('[Auth Page] Login Started');
