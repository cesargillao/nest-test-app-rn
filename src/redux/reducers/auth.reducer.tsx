import { AuthActionTypes, AuthI, AuthI_InitState } from '../types';

export const authReducer = (state = AuthI_InitState, action: AuthActionTypes): AuthI => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        isLogged: true,
        uid: action.payload.uid,
        name: action.payload.name,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        token: action.payload.token,
      };

    case 'AUTH_LOGOUT':
      return AuthI_InitState;

    default:
      return state;
  }
};
