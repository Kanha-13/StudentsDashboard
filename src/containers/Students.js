import { useEffect } from 'react';
import useStudents from '../redux/students/useStudent';
import StudentHeader from '../components/students/StudentHeader';
import StudentTable from '../components/students/StudentTable';

const Students = () => {
  const { data, loading, error, loadStudents } = useStudents();

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className='w-full h-[90%] bg-white flex flex-col rounded-xl p-2 px-4'>
      <StudentHeader />
      <StudentTable students={data} loading={loading} error={error} />
    </div>
  );
}

export default Students; 