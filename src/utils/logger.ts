import { Express } from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

export default (app: Express): void => {
  app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, '..', '..', 'logs', 'request.log'), { flags: 'a' })
  }));

  app.use(morgan('dev'))
};
