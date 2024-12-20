import { useEffect, useState } from 'react';
import useStudents from '../redux/students/useStudent';
import StudentHeader from '../components/students/StudentHeader';
import StudentTable from '../components/students/StudentTable';
import Modal from '../components/Modal/Modal';
import StudentForm from '../components/students/StudentForm';

const Students = () => {
  const { students, loading, error, loadStudents, addStudent } = useStudents();
  const [isAddOpen, setAddOpen] = useState(false);

  const openAddForm = () => {
    setAddOpen((state) => !state)
  }

  const handleAddStudent = async (data) => {
    await addStudent(data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className='w-full h-[90%] bg-white flex flex-col rounded-xl p-2 px-4'>
      <StudentHeader onAdd={openAddForm} />
      <StudentTable students={students} loading={loading} error={error} />
      {isAddOpen ? <Modal onClose={openAddForm}>
        <StudentForm error={error} mode='add' onclose={() => openAddForm(false)} onsave={handleAddStudent} />
      </Modal> : <></>
      }
    </div>
  );
}

export default Students; 