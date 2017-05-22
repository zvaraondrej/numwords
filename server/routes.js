/**
 * Main application routes
 */

import path from 'path';
import config from './config';
import pageNotFound from './components/errors';
import words from './api/words';

export default function (app) {
  app.use('/api/words', words);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api)/*').get(pageNotFound);

  // All other routes should redirect to the index.html, important for html5mode urls
  app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(`${config.root}/index.html`));
  });
}
