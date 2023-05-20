import axios from "axios";

const http = axios.create();

const localStore: Storage = window.localStorage;

const baseURL = "https://elearningnew.cybersoft.edu.vn/api/";

const TokenCyberSoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3NCIsIkhldEhhblN0cmluZyI6IjE2LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDgyMjQwMDAwMCIsIm5iZiI6MTY2ODI3MjQwMCwiZXhwIjoxNjk0OTcwMDAwfQ.3TXoqM7cOKUQgRGc0plbpUsV406snlZBBeHlA7RxJYk";

let token: string = "";
export const checkToken = (): void => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (user === null) {
    token = "";
  } else {
    token = `Bearer ${user.accessToken}`;
    localStore.setItem("token", token)
  }
};

http.interceptors.request.use((config: any) => {
    return {
        ...config,
        headers: {
            TokenCyberSoft,
            Authorization: token,
        },
        baseURL,
    };
});

export default http;