import React from 'react'

const CustomButton = ({ title, onclick, color = 'gray-700', bg = 'bg-gray-300', hoverBg = 'hover:bg-gray-500' }) => {
  return (
    <button
      onClick={onclick}
      className={`font-notoSans px-6 py-2 ${bg} text-${color} rounded-md ${hoverBg}`}
    >
      {title}
    </button>
  )
}

export default CustomButton;