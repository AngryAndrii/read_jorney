import axios from 'axios';
import { Api, setAuthHeader } from './api';

export class UserApi extends Api {
  static async regUser(data) {
    return this.post('/users/signup', data);
  }

  static async loginUser(data) {
    const resp = await this.post('/users/signin', data);
    setAuthHeader(resp.data.token);
    localStorage.setItem('token', resp.data.token);
    return resp;
  }

  static async currentUser() {
    try {
      const resp = await this.get('/users/current');
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
}
