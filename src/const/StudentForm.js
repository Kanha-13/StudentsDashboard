export const StudentInputFields = [
  { title: "Student Name", name: "studentName", placeText: "Enter student name", type: "text" },
  { title: "Cohort", name: "cohort", placeText: "eg. AY 2024-25", type: "text" },
  { title: "Joining Date", name: "joinDate", placeText: "", type: "date" },
  { title: "Last Login", name: "lastLogin", placeText: "", type: "datetime-local" },
  { title: "Status", name: "status", placeText: "Select status", options: [{ key: 1, title: "Active" }, { key: 0, title: "In Active" }], type: "select" }
]

export const courseOptions = [
  { key: "cbse9maths", title: "CBSE 9 Maths" },
  { key: "cbse9science", title: "CBSE 9 Science" },
  { key: "cbse9commerce", title: "CBSE 9 Commerce" },
  { key: "cbse9arts", title: "CBSE 9 Arts" },
  { key: "cbse9english", title: "CBSE 9 English" },
]