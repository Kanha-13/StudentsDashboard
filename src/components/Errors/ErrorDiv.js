import React from 'react'

const ErrorDiv = ({ message }) => {
  return (
    <div className='text-center absolute w-1/2 h-60 top-[30%] right-[20%] flex justify-center items-center text-lg p-30 rounded-md bg-red-300'>{message}</div>
  )
}

export default ErrorDiv; 