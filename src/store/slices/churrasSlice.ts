import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColorFactory } from 'antd/es/color-picker/color';

import { setItem, getItem } from '../../utils/localStorage';

export interface Churras {
  id: string;
  color: string | ColorFactory;
  date: string | any;
  description: string;
  name: string;
  observation: string;
  users: {
    id: string;
    contribution: number;
    name: string;
  }[];
}

export interface ChurrasSlice {
  churras: Churras[];
  selectedChurras: Churras;
}

const initialState: ChurrasSlice = {
  churras: [] as ChurrasSlice['churras'],
  selectedChurras: {} as Churras,
};

export const churrasSlice = createSlice({
  name: 'churras',
  initialState,
  reducers: {
    setChurras(state, action: PayloadAction<Churras>) {
      state.churras = setItem<ChurrasSlice['churras']>('gestaoChurras', [
        ...getItem<ChurrasSlice['churras']>('gestaoChurras'),
        action.payload,
      ]);
    },
    getChurras(state) {
      state.churras = getItem<ChurrasSlice['churras']>('gestaoChurras');
    },
    selectChurras(state, action: PayloadAction<Churras>) {
      state.selectedChurras = action.payload;
    },
    updateChurras(state, action: PayloadAction<Churras>) {
      const allChurras = getItem<ChurrasSlice['churras']>('gestaoChurras');

      state.churras = setItem<ChurrasSlice['churras']>(
        'gestaoChurras',
        allChurras.map((c) => {
          if (c.id === action.payload.id) {
            return action.payload;
          }

          return c;
        })
      );
    },
    removeChurras(state, action: PayloadAction<string>) {
      const allChurras = getItem<ChurrasSlice['churras']>('gestaoChurras');
      state.churras = setItem<ChurrasSlice['churras']>(
        'gestaoChurras',
        allChurras.filter((c) => c.id !== action.payload)
      );
    },
    searchChurras(state, action: PayloadAction<string>) {
      const allChurras = getItem<ChurrasSlice['churras']>('gestaoChurras');

      state.churras = allChurras.filter(
        (c) => c.name.toLowerCase().search(action.payload.toLowerCase()) !== -1
      );
    },
  },
});

export default churrasSlice.reducer;
export const {
  setChurras,
  getChurras,
  selectChurras,
  updateChurras,
  removeChurras,
  searchChurras,
} = churrasSlice.actions;
