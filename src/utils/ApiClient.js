import axios from 'axios';
import { getCookieParser } from 'next/dist/server/api-utils';
import { BASE_URL } from './config';

const apiClient = axios.create({
 baseURL: `${BASE_URL}`,
  headers: {
    "X-Requested-with": "XMLHttpRequest",
  },
  withCredentials: true,
});
apiClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
export default apiClient;