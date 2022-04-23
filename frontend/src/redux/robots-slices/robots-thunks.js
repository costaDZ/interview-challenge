import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRobots = createAsyncThunk(
    'robots/fetchRobots',
    async (obj, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {

        try {
            const response = await fetch('http://localhost:8000/api/robots');
            if (!response.ok) {
                return rejectWithValue(response.status)
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw rejectWithValue(error.message)
        }

    }
);