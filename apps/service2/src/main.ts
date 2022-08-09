/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import logger from '@libs/logger';

const app = express();

const serviceLogger = logger.child({service: 'service2'});

app.get('/api', (req, res) => {
  serviceLogger.info('Incoming request for a service2', { metadata: 123 });
  res.send({ message: 'Welcome to service2!' });
});

const port = process.env.port || 3332;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
