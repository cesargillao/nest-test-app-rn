import { UIActionTypes } from '../types/ui.types';

export const uiLoading = (message: string = ''): UIActionTypes => ({
  type: 'UI_LOADING',
  payload: { message },
});

export const uiLoaded = (): UIActionTypes => ({
  type: 'UI_LOADED',
});
