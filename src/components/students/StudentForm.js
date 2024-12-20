import React, { useEffect, useState } from 'react';
import CustomInput from '../Input/CustomInput';
import { StudentInputFields, courseOptions } from '../../const/StudentForm';
import MultiSelectInput from '../Input/MultiSelect';
import CustomButton from '../Buttons/CustomButton';

const StudentForm = ({ title = "Student Detail", mode = 'add', onsave, onclose }) => {
  const [studentInfo, setStudentInfo] = useState({
    studentName: "",
    cohort: "",
    courses: "",
    joinDate: "",
    lastLogin: "",
    status: "",
  });

  const handleInputs = (key, value) => {
    setStudentInfo((state) => {
      return { ...state, [key]: value };
    });
  };

  const handleAction = () => {
    onsave(studentInfo);
  };

  const handleCancel = () => {
    onclose();
  };

  const getButtonText = () => {
    switch (mode) {
      case 'add':
        return 'Save';
      case 'edit':
        return 'Update';
      case 'delete':
        return 'Delete';
      default:
        return 'Submit';
    }
  };

  const getBg = () => {
    return mode === 'delete'
      ? 'red-500'
      : 'blue-700'
  }
  const getHoverBg = () => {
    return mode === 'delete'
      ? 'red-600'
      : 'blue-800'

  }

  useEffect(()=>{
    console.log(studentInfo)
  },[studentInfo])

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-notoSans font-semibold text-studentTableHeaderText ml-6">
          {title}
        </h3>
        <div className="flex flex-wrap mt-5">
          {StudentInputFields.map((field, index) => (
            <CustomInput
              key={index}
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
        <CustomButton onclick={handleCancel} color="gray-700" title='Cancel' bg={'gray-300'} hoverBg={'gray-500'} />
        <CustomButton onclick={handleAction} color="white" title={getButtonText()} bg={getBg()} hoverBg={getHoverBg()} />
      </div>
    </div>
  );
};

export default StudentForm;
