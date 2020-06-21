import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

// require('react-dom');
// // @ts-ignore
// global.RRR2 = require('react');
// console.log('HEEEERE');
// // @ts-ignore
// console.log(global.RRR === global.RRR2);

const port = parseInt(String(process.env.PORT || '3000'), 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname, query } = parsedUrl;

    handle(req, res, parsedUrl);
  }).listen(port);

  // tslint:disable-next-line:no-console
  console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
});
