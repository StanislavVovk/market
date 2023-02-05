import { RootState, AppDispatch } from 'store/store'
import { useAppForm } from './useAppForm/useAppForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector, useEffect, useState, useAppForm }
