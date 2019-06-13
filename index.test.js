var lambdafn = require("./index");

const mockEvent = {
  resource: "/API/PATH",
  path: "/API/PATH",
  httpMethod: "POST",
  headers: {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "CloudFront-Forwarded-Proto": "https",
    "CloudFront-Is-Desktop-Viewer": "true",
    "CloudFront-Is-Mobile-Viewer": "false",
    "CloudFront-Is-SmartTV-Viewer": "false",
    "CloudFront-Is-Tablet-Viewer": "false",
    "CloudFront-Viewer-Country": "IN",
    "content-type": "application/json",
    Host: "url.eu-west-1.amazonaws.com",
    origin: "chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
    Via: "2.0 XXXXXXXXXXXXXX.cloudfront.net (CloudFront)",
    "X-Amz-Cf-Id": "XXXXXXXXXX51YYoOl75RKjAWEhCyna-fuQqEBjSL96TMkFX4H0xaZQ==",
    "X-Amzn-Trace-Id": "Root=1-XXX03c23-25XXXXXX948c8fba065caab5",
    "x-api-key": "SECUREKEY",
    "X-Forwarded-For": "XX.XX.XXX.XXX, XX.XXX.XX.XXX",
    "X-Forwarded-Port": "443",
    "X-Forwarded-Proto": "https"
  },
  multiValueHeaders: {
    Accept: ["*/*"],
    "Accept-Encoding": ["gzip, deflate, br"],
    "Accept-Language": ["en-GB,en-US;q=0.9,en;q=0.8"],
    "cache-control": ["no-cache"],
    "CloudFront-Forwarded-Proto": ["https"],
    "CloudFront-Is-Desktop-Viewer": ["true"],
    "CloudFront-Is-Mobile-Viewer": ["false"],
    "CloudFront-Is-SmartTV-Viewer": ["false"],
    "CloudFront-Is-Tablet-Viewer": ["false"],
    "CloudFront-Viewer-Country": ["IN"],
    "content-type": ["application/json"],
    Host: ["apiurl.eu-west-1.amazonaws.com"],
    origin: ["chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop"],
    "User-Agent": [
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
    ],
    Via: ["2.0 XXXXXXXXXXXXXX.cloudfront.net (CloudFront)"],
    "X-Amz-Cf-Id": ["XXXXXXXXXhCyna-fuQqEBjSL96TMkFX4H0xaZQ=="],
    "X-Amzn-Trace-Id": ["Root=1-XXXXXXX67339948c8fba065caab5"],
    "x-api-key": ["SECUREAPIKEYPROVIDEDBYAWS"],
    "X-Forwarded-For": ["xx.xx.xx.xxx, xx.xxx.xx.xxx"],
    "X-Forwarded-Port": ["443"],
    "X-Forwarded-Proto": ["https"]
  },
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: {
    resourceId: "xxxxx",
    resourcePath: "/api/endpoint",
    httpMethod: "POST",
    extendedRequestId: "xxXXxxXXw=",
    requestTime: "29/Nov/2018:19:21:07 +0000",
    path: "/env/api/endpoint",
    accountId: "XXXXXX",
    protocol: "HTTP/1.1",
    stage: "env",
    domainPrefix: "xxxxx",
    requestTimeEpoch: 1543519267874,
    requestId: "xxxxxxx-XXXX-xxxx-86a8-xxxxxa",
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: "SECUREAPIKEYPROVIDEDBYAWS",
      cognitoAuthenticationType: null,
      userArn: null,
      apiKeyId: "xxXXXXxxxxxx",
      userAgent:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
      accountId: null,
      caller: null,
      sourceIp: "xx.xxx.xxx.xxx",
      accessKey: null,
      cognitoAuthenticationProvider: null,
      user: null
    },
    domainName: "url.eu-west-1.amazonaws.com",
    apiId: "xxxxx"
  },
  body:
    '{\n    "city": "Test 1 City",\n    "state": "NY",\n    "zipCode": "11549"\n}',
  isBase64Encoded: false
};

const mockContent = {
  callbackWaitsForEmptyEventLoop: true,
  logGroupName: "/aws/lambda/lambda-name",
  logStreamName: "2018/11/29/[$LATEST]xxxxxxxxxxxb",
  functionName: "lambda-name",
  memoryLimitInMB: "1024",
  functionVersion: "$LATEST",
  invokeid: "xxxxx-xxx-11e8-xxx-xxxxxxxf9",
  awsRequestId: "xxxxxx-xxxxx-11e8-xxxx-xxxxxxxxx",
  invokedFunctionArn: "arn:aws:lambda:eu-west-1:xxxxxxxx:function:lambda-name"
};

(function() {
  lambdafn.handler(mockEvent, mockContent, function(data) {
    console.log(data);
  });
})();
