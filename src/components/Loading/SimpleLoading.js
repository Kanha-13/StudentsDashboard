import React from 'react'

const SimpleLoading = () => {
  return (
    <div className="bg-gray-200 p-4 absolute top-[45%] left-1/2 flex flex-col rounded-md items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 rounded-md border-dashed animate-spin"></div>
      <div className='font-bold font-notoSans pt-2'>Loading...</div>
    </div>
  )
}

export default SimpleLoading