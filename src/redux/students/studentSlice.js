import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchStudentsStart: (state) => {
      state.loading = true;
    },
    fetchStudentsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchStudentsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchStudentsStart, fetchStudentsSuccess, fetchStudentsFailure } = studentSlice.actions;

export default studentSlice.reducer;
