import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MarketState {
  value: number;
}

const initialState: MarketState = {
  value: 0,
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write 'mutating' logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a 'draft state' and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = MarketSlice.actions;

// export default nameSlice.reducer;
