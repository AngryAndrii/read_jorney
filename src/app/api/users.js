import { Api } from './api';

export class UserApi extends Api {
  /**
   * ....
   */
  static async regUser(data) {
    return this.post('/users/signup', data);
  }

  static async loginUser(data) {
    return this.post('/users/signin', data);
  }
}
