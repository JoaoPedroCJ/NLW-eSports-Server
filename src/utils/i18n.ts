import i18next from 'i18next';
import Backend from 'i18next-node-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

import { Express } from 'express';

export default (app: Express): void => {
  i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
      backend: {
        loadPath: `${__dirname}/locales/{{lng}}.json`,
      },
      fallbackLng: 'pt_BR',
      preload: ['pt_BR'],
    });

  app.use(i18nextMiddleware.handle(i18next));
};
