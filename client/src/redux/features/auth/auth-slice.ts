import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface AuthState {
  userId: null | string;
  token: null | string;
}

const initialState = {
  userId: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { token, userId },
      }: PayloadAction<{
        token: string;
        userId: string;
      }>
    ) => {
      state.userId = userId;
      state.token = token;
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.userId;
