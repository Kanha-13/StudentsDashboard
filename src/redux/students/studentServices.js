import api from '../../services/api';

export const getStudents = async () => {
  const response = await api.get(`/students`);
  return response.data;
};

export const getStudent = async (id) => {
  const response = await api.get(`/students/${id}`);
  return response.data;
};

export const createStudent = async (userData) => {
  const response = await api.post('/user', userData);
  return response.data;
};

export const updateStudent = async (userData) => {
  const response = await api.patch('/user', userData);
  return response.data;
};

export const deleteStudent = async (userData) => {
  const response = await api.delete('/user', userData);
  return response.data;
};
