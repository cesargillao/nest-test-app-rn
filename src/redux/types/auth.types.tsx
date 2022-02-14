export interface AuthI {
  isLogged: boolean;
  uid: number;
  name: string;
  lastName: string;
  phone: string;
  token: string;
}

export const AuthI_InitState: AuthI = {
  isLogged: false,
  uid: 0,
  name: '',
  lastName: '',
  phone: '',
  token: '',
};

export type AuthActionTypes = { type: 'AUTH_LOGIN'; payload: AuthI } | { type: 'AUTH_LOGOUT' };
