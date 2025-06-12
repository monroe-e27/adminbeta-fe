import axios from "axios";
import checkResponseStatusCode from "../utils/checkResponseStatusCode";
import checkResponseObject from "../utils/checkResponseObject";
import { getUserSessionObject } from "../utils/utilityFunctions";

export const userLogin = async (params: any) => {
  try {
    const res = await axios
      .post(import.meta.env.VITE_REACT_APP_API_URL + "/api/user/login", params)
      .catch((error) => {
        checkResponseStatusCode(error.response);
        let responseError = new Error(error.response.data.message);
        responseError = error.response;
        throw responseError;
      });

    checkResponseObject(res.data);

    return res.data;
  } catch (error) {
    return error;
  }
};

/**
 * 
 * Fetch multiple startups
 * @returns 
 */
export const startupsFetch = async (params: any) => {
    try {
      const { jwtData } = getUserSessionObject();
      const { token } = jwtData;
      const config = {
        headers: { Authorization: token },
      };
      const res = await axios
        .post(import.meta.env.VITE_REACT_APP_API_URL + "/api/startup/all",
          params, config)
        .catch((error) => {
          checkResponseStatusCode(error.response);
          let responseError = new Error(error.response.data.message);
          responseError = error.response;
          throw responseError;
        });
  
      checkResponseObject(res.data);
  
      return res.data;
    } catch (error) {
      return error;
    }
  };
  

/**
 * 
 * Fetch multiple users
 * @returns 
 */
export const siteUsersFetch = async (params: any) => {
  try {

    const { jwtData } = getUserSessionObject();
    const { token } = jwtData;
    const config = {
      headers: { Authorization: token },
    };
    const res = await axios
      .post(import.meta.env.VITE_REACT_APP_API_URL + "/api/site-user/all",
        params, config)
      .catch((error) => {
        checkResponseStatusCode(error.response);
        let responseError = new Error(error.response.data.message);
        responseError = error.response;
        throw responseError;
      });

    checkResponseObject(res.data);

    return res.data;
  } catch (error) {
    return error;
  }
};

/**
 * 
 * Fetch single user 
 * @returns 
 */
export const siteUserFetch = async (params: any) => {
  try {
    const { jwtData } = getUserSessionObject();
    const { token } = jwtData;
    const config = {
      headers: { Authorization: token },
    };
    const res = await axios
      .get(import.meta.env.VITE_REACT_APP_API_URL + "/api/site-user/get", {
        ...config,
        params
      })
      .catch((error) => {
        checkResponseStatusCode(error.response);
        let responseError = new Error(error.response.data.message);
        responseError = error.response;
        throw responseError;
      });
    const [result] = res.data; // Result structure is different due to meta query from wp
    checkResponseObject(result);

    return result;
  } catch (error) {
    return error;
  }
};

export const siteUserUpdateProfile = async (params: any, where: any) => {
  try {
    const { jwtData } = getUserSessionObject();
    const { token } = jwtData;
    const config = {
      headers: { Authorization: token },
    };
    const res = await axios
      .patch(import.meta.env.VITE_REACT_APP_API_URL + "/api/site-user/update-profile", {params, where}, config)
      .catch((error) => {
        checkResponseStatusCode(error.response);
        let responseError = new Error(error.response.data.message);
        responseError = error.response;
        throw responseError;
      });
      checkResponseObject(res.data);

    return res.data;
  } catch (error) {
    return error;
  };

};

export const siteUserUpdateAdminStatus = async (params: any) => {
    try {
        const { jwtData } = getUserSessionObject();
        const { token } = jwtData;
        const config = {
            headers: { Authorization: token },
        };
        const res = await axios
            .post(import.meta.env.VITE_REACT_APP_API_URL + "/api/site-user/update-admin-status",
                params, config)
            .catch((error) => {
                checkResponseStatusCode(error.response);
                let responseError = new Error(error.response.data.message);
                responseError = error.response;
                throw responseError;
            });

        checkResponseObject(res.data);

        return res.data;
    } catch (error) {
        return error;
    }
};

export const siteUserUpdateBannedStatus = async (params: any) => {
  try {
    const { jwtData } = getUserSessionObject();
    const { token } = jwtData;
    const config = {
      headers: { Authorization: token },
    };
    const res = await axios
      .patch(import.meta.env.VITE_REACT_APP_API_URL + "/api/site-user/update-banned-status", params, config)
      .catch((error) => {
        checkResponseStatusCode(error.response);
        let responseError = new Error(error.response.data.message);
        responseError = error.response;
        throw responseError;
      });
      checkResponseObject(res.data);

    return res.data;
  } catch (error) {
    return error;
  };
};