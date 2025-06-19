import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

// Initial state for the counter
const initialState: CounterState = {
  value: 0,
};

// Create the slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to use in the store
export default counterSlice.reducer;
