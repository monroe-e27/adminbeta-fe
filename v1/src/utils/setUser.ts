import { setAuthToken } from "./setAuthToken";
export const setUser = (token: string) => {
  console.log("token:", token);
  setAuthToken(token);
  return token;
};
