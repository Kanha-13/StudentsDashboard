import downIcon from '../../assets/icons/down.png'
import addIcon from '../../assets/icons/add.png'
const StudentHeader = ({ onAdd }) => {
  return (
    <div className="h-15 pt-2 flex w-full mb-9 items-center justify-between">
      <div className='flex w-72 items-center justify-between'>
        <div className='cursor-pointer w-[54%] flex rounded-md items-center justify-between p-1 px-4 bg-gray-200'>
          <div className='font-bold font-notoSans text-studentTableHeaderText text-base'>AY 2024-25</div>
          <img src={downIcon} alt="open" />
        </div>
        <div className='cursor-pointer w-[43%] flex rounded-md items-center justify-between p-1 px-4 bg-gray-200'>
          <div className='font-notoSans text-studentTableHeaderText font-semibold text-md'>CBSE 9</div>
          <img src={downIcon} alt="open" />
        </div>
      </div>
      <div onClick={onAdd} className='cursor-pointer flex rounded-md items-center justify-between p-2 sm:py-1 px-4 bg-gray-200'>
        <img className='' src={addIcon} alt="" />
        <div className='hidden ml-3 sm:block font-bold font-notoSans text-studentTableHeaderText text-base'>Add new Student</div>
      </div>
    </div>
  );
}

export default StudentHeader;