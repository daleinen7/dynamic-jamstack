const querystring = require('querystring');

exports.handler = async (event, constext) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed'}
  }

  const params = querystring.parse(event.body);
  const num = params.num || 0;

  let answer = num * num;

  return {
    statusCode: 200,
    body: answer,
  };
};