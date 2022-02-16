import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authInitVerifySession, RootState } from '../redux';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Navigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authInitVerifySession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Auth = useSelector((state: RootState) => state.auth);
  return Auth.isLogged ? <AppRoutes /> : <AuthRoutes />;
};
