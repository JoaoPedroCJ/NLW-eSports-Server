import { Express } from 'express';
import { serve, setup } from 'swagger-ui-express';
import docs from '../docs';

const options = {
  customCss: `.swagger-ui .topbar {
    display: none;
  }

  .swagger-ui .info {
    margin: 20px 0;
  }
  `,
};

export default (app: Express): void => {
  app.get('/api-docs/docs.json', (req, res) => res.json(docs));
  app.get('/api-docs/download', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-disposition', 'attachment; filename=docs.json');
    res.send(docs);
  });
  app.use('/api-docs', serve, setup(docs, options));
};
