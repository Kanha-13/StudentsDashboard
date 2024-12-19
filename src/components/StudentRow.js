const StudentRow = ({ student }) => {
  return (
    <tr>
      <td class="py-2 px-4">{student.name}</td>
      <td class="py-2 px-4">{student.cohort}</td>
      {student.courses.split(",").map((course, index) => {
        return (
          <td class="py-2 px-4">
            <span class="bg-grey-500 text-black rounded-full px-2">{course}</span>
          </td>
        )
      })}
      <td class="py-2 px-4">{student.joinDate}</td>
      <td class="py-2 px-4">{student.lastLogin}</td>
      <td class="py-2 px-4">
        <span class="text-green-500">
          <i class="fas fa-circle"></i>
        </span>
      </td>
    </tr>
  )
};

export default StudentRow;
