import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Navigator = () => {
  const Auth = useSelector((state: RootState) => state.auth);
  return Auth.isLogged ? <AppRoutes /> : <AuthRoutes />;
};
