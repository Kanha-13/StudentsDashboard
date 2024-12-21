import React from 'react'

const FilterButton = ({ title, icon }) => {
  return (
    <div className='cursor-pointer flex rounded-md items-center justify-between p-1 px-4 bg-gray-200'>
      <div className='font-bold mr-3 font-notoSans text-studentTableHeaderText text-base'>{title}</div>
      <img src={icon} alt="open" />
    </div>
  )
}

export default FilterButton