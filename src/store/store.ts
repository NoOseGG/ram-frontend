import { characterSlice } from './slices/characterSlice';
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from '../store/slices/characterSlice'

export const store = configureStore({
  reducer: {
    characters: charactersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
