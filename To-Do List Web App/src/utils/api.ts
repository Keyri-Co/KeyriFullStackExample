import axios, { AxiosResponse } from "axios";

import { DEMO_API_URL } from "./constants";
import { IAuthData, ILoginResponse } from "./types";

const client = axios.create({ baseURL: DEMO_API_URL });

export const userAPI = {
  authenticatedUser: (data: IAuthData) => {
    return client
      .post<ILoginResponse>("/users/session-with-encryption", data)
      .then((res) => responseHandler(res));
  },

  addTodo: <Tres = any>(name) => {
    return client.post<Tres>("/demotodo", { name }).then((res) => res.data);
  },

  getTodoList: <Tres = any>() => {
    return client.get<Tres>("/demotodo").then((res) => res.data);
  },
};

const responseHandler = (response: AxiosResponse<ILoginResponse>) => {
  if (response && response.data) {
    const { token } = response.data;
    if (token) {
      client.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }
  return response;
};

export const clearAxiosConfig = () => {
  delete client.defaults.headers.common.Authorization;
};
