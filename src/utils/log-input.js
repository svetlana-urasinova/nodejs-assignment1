export const logInput = req => {
  const body = [];

  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const message = parseMessage(body);

    console.log(message);
  });
};

const parseMessage = body => {
  const parsedBody = Buffer.concat(body).toString();

  return parsedBody.split('=')[1];
};
