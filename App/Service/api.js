import axios from 'axios';
const instance = axios.create();

export class ApiConfig {
  getJSON(URL) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'GET',
        url: URL,
      })
        .then(res => {
          resolve(res);
        })
        .catch(ERROR => {
          reject(ERROR);
        });
    });
  }
}
