import checkResponseObject from "./checkResponseObject";

function checkResponseStatusCode(response) {
  //If API throws a 401 Unauthorized code, logout the user and redirect to sign in.

  if (response.status === 401) {
    localStorage.clear();
    window.location.href = "/signin";
    // window.location.href = "/";
  }

  //Check if response is valid JSON data. If not, it means server has thrown an HTML error message instead.
  checkResponseObject(response.data);
}

export default checkResponseStatusCode;
