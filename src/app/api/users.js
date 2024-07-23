import axios from 'axios';
import { get, post, setAuthHeader } from './api';
import { useStore } from '../zustand/store';

export const regUser = async data => {
  return post('/users/signup', data);
};

export const loginUser = async data => {
  const resp = await post('/users/signin', data);
  const token = resp.data.token;
  setAuthHeader(token);
  return resp;
};

export const currentUser = async () => {
  try {
    const { getState } = useStore;
    const token = getState().token;
    console.log(token);
    setAuthHeader(token);
    const resp = await get('/users/current');
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
