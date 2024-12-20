import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Fetch students actions
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

    // Create student actions
    createStudentStart: (state) => {
      state.loading = true;
    },
    createStudentSuccess: (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    },
    createStudentFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Update student actions
    updateStudentStart: (state) => {
      state.loading = true;
    },
    updateStudentSuccess: (state, action) => {
      const index = state.data.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
      state.loading = false;
    },
    updateStudentFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Delete student actions
    deleteStudentStart: (state) => {
      state.loading = true;
    },
    deleteStudentSuccess: (state, action) => {
      state.data = state.data.filter((student) => student.id !== action.payload.id);
      state.loading = false;
    },
    deleteStudentFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  createStudentStart,
  createStudentSuccess,
  createStudentFailure,
  updateStudentStart,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
