import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import setupSwagger from './swagger'
import setupLogger from './logger'
import setupErrors from './error-handler';
import setupRoutes from '../routes';

const app = express();

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  setupSwagger(app);
  setupLogger(app);
}

setupRoutes(app)
setupErrors(app);

export default app;