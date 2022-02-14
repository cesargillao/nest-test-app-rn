import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import { AuthI, AuthI_InitState } from '../redux/types';

export async function GetSession(): Promise<AuthI> {
  let session: AuthI = AuthI_InitState;
  try {
    const res = await AsyncStorage.getItem('session');
    session = res ? JSON.parse(res || '{}') : AuthI_InitState;
  } catch (err) {
    ToastAndroid.show('Ocurrió un error al obtener la sesión', 3000);
  }
  return session;
}

export async function SetSession(session: AuthI) {
  try {
    await AsyncStorage.setItem('session', JSON.stringify(session));
  } catch (e) {
    ToastAndroid.show('Ocurrió un error al guardar la sesión', 3000);
  }
}
