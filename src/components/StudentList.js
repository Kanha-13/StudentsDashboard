import StudentTable from './StudentTable';
import StudentHeader from './StudentHeader';

const StudentList = ({students}) => {
  return (
    <div className='w-full h-[90%] bg-white flex flex-col rounded-xl p-2 px-4'>
      <StudentHeader />
      <StudentTable students={students} />
    </div>
  );
};

export default StudentList;
