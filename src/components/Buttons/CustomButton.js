import React from 'react'

const CustomButton = ({ title, onclick, color = 'gray-700', bg = 'gray-300', hoverBg = 'gray-500' }) => {
  return (
    <button
      onClick={onclick}
      className={`font-notoSans px-6 py-2 bg-${bg} text-${color} rounded-md hover:bg-${hoverBg}`}
    >
      {title}
    </button>
  )
}

export default CustomButton;