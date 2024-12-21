import { useDispatch, useSelector } from 'react-redux';
import {
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
  deleteStudentFailure
} from './studentSlice';
import { getStudents, createStudent, updateStudent, deleteStudent } from './studentServices';

const useStudents = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.students);

  const loadStudents = async () => {
    dispatch(fetchStudentsStart());

    try {
      const students = await getStudents();
      dispatch(fetchStudentsSuccess(students));
    } catch (err) {
      dispatch(fetchStudentsFailure(err.message));
    }
  };

  const addStudent = async (studentData) => {
    dispatch(createStudentStart());
    try {
      const newStudent = await createStudent(studentData);
      dispatch(createStudentSuccess(newStudent));
    } catch (err) {
      dispatch(createStudentFailure(err.message));
    }
  };

  const updateStudentDetails = async (studentData) => {
    dispatch(updateStudentStart());

    try {
      const updatedStudent = await updateStudent(studentData);
      dispatch(updateStudentSuccess(updatedStudent));
    } catch (err) {
      dispatch(updateStudentFailure(err.message));
    }
  };

  const deleteStudentDetails = async (studentId) => {
    dispatch(deleteStudentStart());

    try {
      await deleteStudent(studentId);
      dispatch(deleteStudentSuccess({ id: studentId }));
    } catch (err) {
      dispatch(deleteStudentFailure(err.message));
    }
  };

  return {
    students: data,
    loading,
    error,
    loadStudents,
    addStudent,
    updateStudentDetails,
    deleteStudentDetails
  };
};

export default useStudents;
