import downIcon from '../../assets/icons/down.png'
import addIcon from '../../assets/icons/add.png'
import FilterButton from '../Buttons/FilterButton';
const StudentHeader = ({ onAdd }) => {
  return (
    <div className="h-15 pt-2 flex w-full mb-9 items-center justify-between">
      <div className='flex w-72 items-center justify-between'>
        <FilterButton title={"AY 2024-25"} icon={downIcon} />
        <FilterButton title={"CBSE 9"} icon={downIcon} />
      </div>
      <div onClick={onAdd} className='cursor-pointer flex rounded-md items-center justify-between p-2 sm:py-1 px-4 bg-gray-200'>
        <img className='' src={addIcon} alt="" />
        <div className='hidden ml-3 sm:block font-bold font-notoSans text-studentTableHeaderText text-base'>Add new Student</div>
      </div>
    </div>
  );
}

export default StudentHeader;