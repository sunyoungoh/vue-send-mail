import axios from 'axios';

function createInstance() {
  return axios.create({
    withCredentials: true,
  });
}

export const instance = createInstance();
