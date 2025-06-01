export const checkIfAuth = (token: string) => {
    console.log(token);
    if (token) window.location.href = "/site-users";
  };
  
  export const validateAccess = (token: string) => {
    if (!token) window.location.href = "/signin";
  };
  