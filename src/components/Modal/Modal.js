import React from 'react'

const Modal = ({ children, onClose }) => {
  return (
    <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center'>
      <div onClick={onClose} className="absolute h-full w-full inset-0 bg-gray-300 opacity-60"></div>
      <div className='relative bg-white h-[95%] w-[95%] sm:h-3/4 sm:w-3/4 rounded-md p-6 px-8 overflow-auto'>
        {children}
      </div>
    </div>
  )
}

export default Modal;