import React from 'react'
import CustomSelect from './CustomSelect'

const CustomInput = ({ title, name, type, value, onchange, placeText, options = [] }) => {
  const inputType = () => {
    return (
      type === "select" ? <CustomSelect name={name} onChange={onchange} options={options} placeText={"Select status"} /> :
        <input type={type} className='w-full h-full p-2 px-4 outline-none border-2 border-gray-200 rounded-md focus-within:border-blue-500' name={name} value={value[name]} onChange={(e) => onchange(name, e.target.value)} placeholder={placeText} />
    )
  }
  return (
    <div className='w-full md:w-[40%] lg:w-1/4 h-14 m-2 lg:m-6 relative'>
      <div className='font-notoSans absolute -top-3.5 px-1 left-3 bg-white text-studentTableHeaderText'>{title}</div>
      {inputType(name)}
    </div>
  )
}

export default CustomInput;