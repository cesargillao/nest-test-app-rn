import { UIActionTypes, UII, UII_InitState } from '../types';

export const uiReducer = (state = UII_InitState, action: UIActionTypes): UII => {
  switch (action.type) {
    case 'UI_LOADING':
      return {
        isLoading: true,
        message: action.payload.message,
      };

    case 'UI_LOADED':
      return UII_InitState;

    default:
      return state;
  }
};
