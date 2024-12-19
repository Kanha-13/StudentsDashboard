import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsStart, fetchStudentsSuccess, fetchStudentsFailure } from './studentSlice';
import { getStudents } from './studentServices';

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

  return { data, loading, error, loadStudents };
};

export default useStudents;
