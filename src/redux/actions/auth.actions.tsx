import { Dispatch } from 'react';
import { ToastAndroid } from 'react-native';
import { uiLoaded, uiLoading } from '.';
import { login, register } from '../../services/auth.service';
import { AuthActionTypes, AuthI, UIActionTypes } from '../types';

export const authInitLogin = (username: string, password: string) => {
  return async (dispatch: Dispatch<AuthActionTypes | UIActionTypes>) => {
    dispatch(uiLoading('Iniciando sesión'));

    try {
      const user = await login(username, password);
      if (user.isLogged) {
        dispatch(authLogin(user));
      } else {
        ToastAndroid.show('Usuario o contraseña incorrecta', 3000);
      }
      // guardar el token localmente
    } catch (err) {
      ToastAndroid.show('Ocurrió un error al iniciar sesión', 3000);
    }

    dispatch(uiLoaded());
  };
};

export const authInitRegister = (form: any) => {
  return async (dispatch: Dispatch<AuthActionTypes | UIActionTypes>) => {
    dispatch(uiLoading('Creando usuario'));

    try {
      const user = await register(form);
      if (user.isLogged) {
        dispatch(authLogin(user));
      } else {
        ToastAndroid.show('No se pudo crear el usuario', 3000);
      }
      // guardar el token localmente
    } catch (err) {
      ToastAndroid.show('Ocurrió un error al crear el usuario', 3000);
    }

    dispatch(uiLoaded());
  };
};

export const authLogin = (user: AuthI): AuthActionTypes => ({
  type: 'AUTH_LOGIN',
  payload: user,
});

export const authLogout = (): AuthActionTypes => ({
  type: 'AUTH_LOGOUT',
});
