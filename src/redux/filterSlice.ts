import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface FilterState {
  filterValue: string;
}

const initialState: FilterState = {
  filterValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterValue(state, action: PayloadAction<string>) {
      state.filterValue = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
  blacklist: ['contacts'],
};

export const persistedFilterReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);

export const { changeFilterValue } = filterSlice.actions;
export const getFilterValue = (state: { filter: FilterState }) =>
  state.filter.filterValue;

export default filterSlice.reducer;
