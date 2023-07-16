import { pages } from './pages.js';
import { logInput } from './utils/log-input.js';
import { wrapHtml } from './utils/wrap-html.js';
import { routes, methods, codes } from './constants.js';

export const requestHandler = (req, res) => {
  const { url, method } = req;

  switch (true) {
    case url === routes.main && method === methods.get:
      res.setHeader('Content-Type', 'text/html');
      res.write(wrapHtml(pages.main));
      break;
    case url === routes.users && method === methods.get:
      res.setHeader('Content-Type', 'text/html');
      res.write(wrapHtml(pages.users));
      break;
    case url === routes.createUser && method === methods.post:
      logInput(req);
      res.statusCode = codes.redirect;
      res.setHeader('Location', '/');
      break;
    default:
      res.statusCode = codes.notFound;
  }

  res.end();
};
