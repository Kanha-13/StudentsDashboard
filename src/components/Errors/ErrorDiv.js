import React from 'react'

const ErrorDiv = ({ message }) => {
  return (
    <div className="text-center absolute w-1/2 h-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-lg p-6 rounded-md bg-red-300">
      {message}
    </div>

  )
}

export default ErrorDiv; 