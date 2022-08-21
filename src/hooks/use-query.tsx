import axios from 'axios';
import {
  FOOTBALL_DATA_TEAM_API_BASE_URL,
  FOOTBALL_DATA_TOKEN
} from '../constants';

const isProduction = process.env.NODE_ENV !== 'development';

const client = axios.create({
  baseURL: isProduction
    ? FOOTBALL_DATA_TEAM_API_BASE_URL
    : 'http://localhost:4000/v4',
  headers: {
    'X-Auth-Token': FOOTBALL_DATA_TOKEN || ''
  }
});

const useQuery = () => {
  return client;
};

export default useQuery;
