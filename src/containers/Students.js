import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../redux/studentSlice';
import StudentList from '../components/StudentList';

const Students = () => {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);
  return (
    <StudentList students={students} />
  )
}

export default Students; 