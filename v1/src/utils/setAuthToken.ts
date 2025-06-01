import axios from "axios";
export const checkIfAuth = (token: string) => {};
export const setAuthToken = (token: string) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
