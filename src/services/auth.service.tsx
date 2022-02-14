import axios from 'axios';
import { AuthI, AuthI_InitState } from '../redux/types';

const API = 'http://192.168.2.108:3000';

export async function login(username: string, password: string): Promise<AuthI> {
  return await axios
    .post(`${API}/user/login`, { username, password })
    .then(({ data }) => {
      console.log('Data recibida: ', data);
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
  return await axios
    .post(`${API}/user/register`, form)
    .then(({ data }) => {
      console.log('Data recibida: ', data);
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
