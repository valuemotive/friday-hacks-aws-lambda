const uuid = require("uuid");

module.exports.helloWorld = async (event, context) => {
  const weather = process.env.WEATHER;
  const genId = uuid.v4();
  console.log("uuid: ", genId);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    },
    body: JSON.stringify({
      message: `Go Serverless! Weather today is ${weather}`,
      requestId: genId
    })
  };
  return response;
};
