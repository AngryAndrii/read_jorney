import axios from 'axios';
import { Api } from './api';

export class UserApi extends Api {
  static async regUser(data) {
    return this.post('/users/signup', data);
  }

  static async loginUser(data) {
    const resp = await this.post('/users/signin', data);
    localStorage.setItem('token', resp.data.token);
    axios.defaults.headers.common = {
      Authorization: `Bearer ${resp.data.token}`,
    };
    console.log(resp);
    return resp;
  }

  static async currentUser() {
    const resp = await this.get('/users/current');
    console.log(resp.data);
    return resp.data;
  }
}
