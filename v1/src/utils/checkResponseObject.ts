function isObject(obj) {
  return obj !== undefined && obj !== null && obj.constructor === Object;
}

function checkResponseObject(data) {
  //if data is already a JSON or Object, do nothing.
  if (isObject(data)) return;

  try {
    JSON.parse(data);
  } catch (e) {
    console.log(
      "checkResponseStatusCode",
      "Invalid JSON received. " + e.message
    );
    let error = new Error("Invalid JSON received.");
    error.data = {
      error: true,
      message: "Invalid JSON received from server. ",
    };
    throw error;
  }
}

export default checkResponseObject;
