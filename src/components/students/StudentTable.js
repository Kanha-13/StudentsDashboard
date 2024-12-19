import React from 'react'
import StudentRow from './StudentRow';
import TableSkeleton from '../skeletons/TableSkeleton';
import ErrorDiv from '../Errors/ErrorDiv';

const StudentTable = ({ students = [], loading = true, error = false }) => {
  return (
    <div className='overflow-auto'>
      <table className='w-full'>
        <thead className='border-b-2 border-gray-100'>
          <tr className="text-xs">
            <th className="min-w-48 py-2 tracking-wide text-left">Student Name</th>
            <th className="w-36 py-2 tracking-wide text-left">Cohort</th>
            <th className="min-w-96 py-2 tracking-wide text-left">Courses</th>
            <th className="min-w-36 py-2 tracking-wide text-left">Date Joined</th>
            <th className="min-w-40 py-2 tracking-wide text-left">Last login</th>
            <th className="w-14 py-2 tracking-wide text-left">Status</th>
          </tr>
        </thead>
        <tbody className='divide-y-2 divide-gray-100'>
          {error ? <ErrorDiv message={"Error fetching students"} /> :
            loading ? <TableSkeleton rows={6} cells={6} /> :
              students.map((student, index) => <StudentRow key={student.name + index} student={student} />)
          }
        </tbody>
      </table>

    </div>
  )
}

export default StudentTable;