import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { uiReducer } from './ui.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
