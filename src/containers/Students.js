import { useEffect, useState } from 'react';
import useStudents from '../redux/students/useStudent';
import StudentHeader from '../components/students/StudentHeader';
import StudentTable from '../components/students/StudentTable';
import Modal from '../components/Modal/Modal';
import StudentForm from '../components/students/StudentForm';

const Students = () => {
  const { data, loading, error, loadStudents } = useStudents();
  const [isAddOpen, setAddOpen] = useState(false);

  const openAddForm = () => {
    setAddOpen((state) => !state)
  }

  const handleAddStudent = (data) =>{
    try {
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className='w-full h-[90%] bg-white flex flex-col rounded-xl p-2 px-4'>
      <StudentHeader onAdd={openAddForm} />
      <StudentTable students={data} loading={loading} error={error} />
      {isAddOpen ? <Modal onClose={openAddForm}>
        <StudentForm mode='add' onclose={()=>openAddForm(false)} onsave={handleAddStudent} />
      </Modal> : <></>
      }
    </div>
  );
}

export default Students; 