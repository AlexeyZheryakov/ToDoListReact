import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

const getToDos = createAsyncThunk('toDos/getToDos', async (_, { rejectWithValue }) => {
  try {
    return (await api.getToDos()).data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export default getToDos;
