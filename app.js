import * as http from 'http';
import * as dotenv from 'dotenv';

import { requestHandler } from './src/routes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  requestHandler(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
