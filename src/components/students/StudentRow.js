import { toddmonthyyyy, getTime } from "../../utils/dateParser";
import course1Icon from '../../assets/images/course1.png'
import course2Icon from '../../assets/images/course2.png'
import { courseOptions } from "../../const/StudentForm";
const defaultType = { name: "", cohort: "", courses: "", joinDate: "", lastLogin: "", status: "" }
const StudentRow = ({ student = defaultType }) => {
  const getCourseLabel = (courseName) => {
    return courseOptions.filter(course => course.key === courseName)[0].title
  }
  return (
    <tr className="text-xs">
      <td className="whitespace-nowrap p-2 pl-0 text=[12px] ">{student.studentName}</td>
      <td className="whitespace-nowrap p-2 pl-0 text=[12px] ">{student.cohort}</td>
      <td className="whitespace-nowrap p-2 pl-0 text=[12px] flex flex-wrap">
        {student.courses?.split(",").map((course, index) => {
          return (
            <div key={index+"-course-map-student-table"} className="bg-gray-100 rounded-md py-1 px-2 mr-2 inline-flex items-center justify-center">
              <img src={index ? course2Icon : course1Icon} />
              <span className="bg-grey-500 text-black rounded-full px-2 font-[500]">{getCourseLabel(course)}</span>
            </div>
          )
        })}
      </td>
      <td className="whitespace-nowrap p-2 pl-0 text=[12px] ">{toddmonthyyyy(student.joinDate)}</td>
      <td className="whitespace-nowrap p-2 pl-0 text=[12px] ">{toddmonthyyyy(student.lastLogin)} {getTime(student.lastLogin)}</td>
      <td className="whitespace-nowrap p-2 pl-0 text=[12px] ">
        {
          student.status ?
            <div className="m-auto w-4 h-4 bg-green-500 rounded-full"></div> :
            <div className="m-auto w-4 h-4 bg-red-500 rounded-full"></div>
        }
      </td>
    </tr>
  )
};

export default StudentRow;
