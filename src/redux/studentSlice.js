import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await fetch('http://localhost:5000/api/students');
  if (!response.ok) throw new Error('Failed to fetch student data');
  const data = await response.json();
  return data;
});

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;
