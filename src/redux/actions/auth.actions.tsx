import { Dispatch } from 'react';
import { ToastAndroid } from 'react-native';
import { uiLoaded, uiLoading } from '.';
import * as service from '../../services/auth.service';
import * as local from '../../services/local.service';
import { SetSession } from '../../services/local.service';
import { AuthActionTypes, AuthI, AuthI_InitState, UIActionTypes } from '../types';

export const authInitVerifySession = () => {
  return async (dispatch: Dispatch<AuthActionTypes | UIActionTypes>) => {
    dispatch(uiLoading('Verificando sesión'));

    try {
      const session = await local.GetSession();
      if (session.isLogged) {
        const user = await service.verifySession(session.token);
        if (user.isLogged) {
          dispatch(authLogin(user));
        }
      }
    } catch (err) {
      ToastAndroid.show('Ocurrió un error al iniciar sesión', 3000);
    }

    dispatch(uiLoaded());
  };
};

export const authInitLogin = (username: string, password: string) => {
  return async (dispatch: Dispatch<AuthActionTypes | UIActionTypes>) => {
    dispatch(uiLoading('Iniciando sesión'));

    try {
      const user = await service.login(username, password);
      if (user.isLogged) {
        dispatch(authLogin(user));
        local.SetSession(user);
      } else {
        ToastAndroid.show('Usuario o contraseña incorrecta', 3000);
      }
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
      const user = await service.register(form);
      if (user.isLogged) {
        dispatch(authLogin(user));
        SetSession(user);
      } else {
        ToastAndroid.show('No se pudo crear el usuario', 3000);
      }
    } catch (err) {
      ToastAndroid.show('Ocurrió un error al crear el usuario', 3000);
    }

    dispatch(uiLoaded());
  };
};

export const authInitLogout = () => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      await local.SetSession(AuthI_InitState);
      dispatch(authLogout());
    } catch (e) {
      ToastAndroid.show('Ocurrió un error al cerrar la sesión', 3000);
    }
  };
};

export const authLogin = (user: AuthI): AuthActionTypes => ({
  type: 'AUTH_LOGIN',
  payload: user,
});

export const authLogout = (): AuthActionTypes => ({
  type: 'AUTH_LOGOUT',
});
