import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiSlice {
  openDrawer: boolean;
}

const initialState: UiSlice = {
  openDrawer: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenDrawer(state, action: PayloadAction<boolean>) {
      state.openDrawer = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const { setOpenDrawer } = uiSlice.actions;
