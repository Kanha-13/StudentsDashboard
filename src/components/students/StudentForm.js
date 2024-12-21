import React, { useEffect, useState } from 'react';
import CustomInput from '../Input/CustomInput';
import { StudentInputFields, courseOptions } from '../../const/StudentForm';
import MultiSelectInput from '../Input/MultiSelect';
import CustomButton from '../Buttons/CustomButton';
import ErrorDiv from '../Errors/ErrorDiv';
import { parseISODate, parseISOWithTime } from '../../utils/dateParser';
const DEFAULT_STUDENT_DATA = {
  studentName: "",
  cohort: "",
  courses: "",
  joinDate: "",
  lastLogin: "",
  status: "",
}
const StudentForm = ({ title = "Student Detail", mode = 'add', studentData, onsave, onclose, error, ondelete }) => {
  const [studentInfo, setStudentInfo] = useState(DEFAULT_STUDENT_DATA);

  const handleInputs = (key, value) => {
    setStudentInfo((state) => {
      return { ...state, [key]: value };
    });
  };

  const handleAction = () => {
    setStudentInfo(DEFAULT_STUDENT_DATA)
    onsave(studentInfo);
  };

  const handleCancel = () => {
    setStudentInfo(DEFAULT_STUDENT_DATA)
    onclose();
  };

  const handleDelete = () => {
    setStudentInfo(DEFAULT_STUDENT_DATA)
    ondelete();
  };

  const getButtonText = () => {
    switch (mode) {
      case 'add':
        return 'Save';
      case 'edit':
        return 'Update';
      default:
        return 'Submit';
    }
  };

  useEffect(() => {
    if (studentData.id) {
      const data = { ...studentData, joinDate: parseISODate(studentData.joinDate), lastLogin: parseISOWithTime(studentData.lastLogin) }
      setStudentInfo(data)
    }
  }, [studentData])

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-notoSans font-semibold text-studentTableHeaderText ml-6">
          {title}
        </h3>
        <div className="flex flex-wrap mt-5">
          {StudentInputFields.map((field, index) => (
            <CustomInput
              key={index + "-student-form-field"}
              value={studentInfo}
              onchange={handleInputs}
              {...field}
            />
          ))}
          <MultiSelectInput
            name={"courses"}
            onchange={handleInputs}
            options={courseOptions}
            placeText={"Select courses"}
            title={"Courses"}
            value={studentInfo}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8 p-4">
        <CustomButton onclick={handleCancel} color="gray-700" title='Cancel' bg={'bg-gray-300'} hoverBg={'hover:bg-gray-400'} />
        <CustomButton onclick={handleAction} color="white" title={getButtonText()} bg={'bg-blue-800'} hoverBg={'hover:bg-blue-900'} />
        {mode !== "add" ? <CustomButton onclick={handleDelete} color="white" title='Delete' bg={'bg-red-500'} hoverBg={'hover:bg-red-600'} /> : <></>}
      </div>
      {error ? <ErrorDiv message={"Error fetching students"} /> : <></>}
    </div>
  );
};

export default StudentForm;
