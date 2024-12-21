import { useEffect, useState } from 'react';
import useStudents from '../../redux/students/useStudent';
import StudentHeader from '../../components/students/StudentHeader';
import StudentTable from '../../components/students/StudentTable';
import Modal from '../../components/Modal/Modal';
import StudentForm from '../../components/students/StudentForm';
import SimpleLoading from '../../components/Loading/SimpleLoading';
import ErrorDiv from '../../components/Errors/ErrorDiv';

const Students = () => {
  const { students, loading, error, loadStudents, addStudent, updateStudentDetails, deleteStudentDetails } = useStudents();
  const [isAddOpen, setAddOpen] = useState(false);
  const [formMode, setMode] = useState("add");
  const [studentInfo, setStudentInfo] = useState({});

  const openAddForm = () => {
    setAddOpen((state) => !state)
    setStudentInfo({})
    setMode("add")
  }

  const handleFormClose = () => {
    setStudentInfo({})
    openAddForm(false)
  }

  const handleSubmitStudent = async (data) => {
    if (formMode === "add")
      await addStudent(data);
    else if (formMode === "edit")
      await updateStudentDetails(data);
    setAddOpen((state) => !state)
    setStudentInfo({})
  }

  const handleStudentDelete = async (index) => {
    await deleteStudentDetails(studentInfo.id)
    setAddOpen((state) => !state)
    setStudentInfo({})
  }

  const handleStudentClick = async (index) => {
    setMode("edit");
    setStudentInfo(students[index]);
    setAddOpen((state) => !state)
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className='w-full h-[90%] bg-white flex flex-col rounded-xl p-2 px-4'>
      <StudentHeader onAdd={openAddForm} />
      <StudentTable students={students} openstudent={handleStudentClick} loading={loading} error={error} />
      {error ? <ErrorDiv message={`${error}`} /> : <></>}
      {isAddOpen ? <Modal onClose={openAddForm}>
        <StudentForm studentData={studentInfo} error={error} mode={formMode} onclose={handleFormClose} onsave={handleSubmitStudent} ondelete={handleStudentDelete} />
      </Modal> : <></>
      }
      {isAddOpen && loading ? <SimpleLoading /> : <></>}
    </div>
  );
}

export default Students; 