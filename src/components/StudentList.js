import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../redux/studentSlice';
import StudentRow from './StudentRow';

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <table class="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr class="bg-gray-200">
          <th class="py-2 px-4 text-left">Student Name</th>
          <th class="py-2 px-4 text-left">Cohort</th>
          <th class="py-2 px-4 text-left">Courses</th>
          <th class="py-2 px-4 text-left">Date Joined</th>
          <th class="py-2 px-4 text-left">Last login</th>
          <th class="py-2 px-4 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map((student, index) => <StudentRow student={student} />)
        }
      </tbody>
    </table>
  );
};

export default StudentList;
