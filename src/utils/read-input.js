export const readInput = (req, callback) => {
  const body = [];

  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const message = parseMessage(body);

    callback(message);
  });
};

const parseMessage = body => {
  const parsedBody = Buffer.concat(body).toString();

  return parsedBody.split('=')[1];
};
