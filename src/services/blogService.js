import axios from 'axios';

const host = 'http://localhost:3003';
const baseUrl = host + '/api/blogs';
const blogService = {
  getAll: async token => {
    const response = await axios.get(baseUrl, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  create: (blog, token) => {
    return axios.post(baseUrl, blog, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
};

export default blogService;
