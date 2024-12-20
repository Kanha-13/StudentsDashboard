import api from '../../services/api';

export const getStudents = async () => {
  const response = await api.get(`/students`);
  return response.data;
};

export const getStudent = async (id) => {
  const response = await api.get(`/students/${id}`);
  return response.data;
};

export const createStudent = async (studentData) => {
  const response = await api.post('/students', studentData);
  return response.data;
};

export const updateStudent = async (studentData) => {
  const response = await api.patch(`/students/${studentData.id}`, studentData);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await api.delete(`/students/${id}`);
  return response.data;
};
