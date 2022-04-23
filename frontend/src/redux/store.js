import { configureStore } from '@reduxjs/toolkit';
import { robotsSlice } from './robots-slices';


const reducer = {
    robotsSlice,
}

export const store = configureStore({ reducer });