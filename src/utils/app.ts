import express from 'express'
import 'express-async-errors'

import setupSwagger from './swagger'
import setupLogger from './logger'
import setupErrors from './error-handler';

const app = express();

if (process.env.NODE_ENV === 'development') {
  setupSwagger(app);
  setupLogger(app);
}

setupErrors(app);

export default app;