const clientPath = 'client';
const serverPath = 'server';
const gulpPath = 'gulp';

export default {
  client: {
    root: `${clientPath}/`,
    scripts: [`${clientPath}/**/!(*.spec|*.mock).js`],
    test: [`${clientPath}/{app,components}/**/*.{spec,mock}.js`],
    e2e: ['e2e/**/*.spec.js'],
  },
  server: {
    root: `${serverPath}/`,
    scripts: [`${serverPath}/**/!(*.spec|*.integration).js`],
    test: {
      integration: [`${serverPath}/**/*.integration.js`, 'mocha.global.js'],
      unit: [`${serverPath}/**/*.spec.js`, 'mocha.global.js'],
    },
  },
  gulp: {
    root: `${gulpPath}/`,
    scripts: [`${gulpPath}/**/*.js`],
  },
  karma: 'karma.conf.js',
  dist: 'dist',
  tmp: '.tmp',
};
