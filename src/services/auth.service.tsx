import { AuthI, AuthI_InitState } from '../redux/types';
import api from './api';

export async function verifySession(token: string): Promise<AuthI> {
  return await api
    .post('/user/verify', { token })
    .then(({ data }) => {
      // console.log('Data recibida: ', data);
      return data?._id
        ? {
            isLogged: true,
            uid: data._id,
            name: data.name,
            lastName: data.lastName,
            phone: data.phone,
            token: data.token,
          }
        : AuthI_InitState;
    })
    .catch(() => {
      return AuthI_InitState;
    });
}

export async function login(username: string, password: string): Promise<AuthI> {
  return await api
    .post('/user/login', { username, password })
    .then(({ data }) => {
      // console.log('Data recibida: ', data);
      return data?._id
        ? {
            isLogged: true,
            uid: data._id,
            name: data.name,
            lastName: data.lastName,
            phone: data.phone,
            token: data.token,
          }
        : AuthI_InitState;
    })
    .catch(() => {
      return AuthI_InitState;
    });
}

export async function register(form: any): Promise<AuthI> {
  return await api
    .post('/user/register', form)
    .then(({ data }) => {
      // console.log('Data recibida: ', data);
      return data?._id
        ? {
            isLogged: true,
            uid: data._id,
            name: data.name,
            lastName: data.lastName,
            phone: data.phone,
            token: data.token,
          }
        : AuthI_InitState;
    })
    .catch(() => {
      return AuthI_InitState;
    });
}
