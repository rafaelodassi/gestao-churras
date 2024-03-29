import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColorFactory } from 'antd/es/color-picker/color';

import { setItem, getItem } from '../../utils/localStorage';

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

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
  status: Status;
  querySearch: string;
}

const initialState: ChurrasSlice = {
  churras: [] as ChurrasSlice['churras'],
  selectedChurras: {} as Churras,
  status: 'idle',
  querySearch: '',
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
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
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
    setQuerySearch(state, action: PayloadAction<string>) {
      state.querySearch = action.payload;
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
  setStatus,
  selectChurras,
  updateChurras,
  removeChurras,
  searchChurras,
  setQuerySearch,
} = churrasSlice.actions;
