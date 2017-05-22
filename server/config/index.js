import path from 'path';

export default {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../..`),

  // Server port
  port: process.env.PORT || 3000,

  // Server IP
  ip: process.env.IP || 'localhost',

  // logging direcotry for production logs
  logDir: path.join(`${__dirname}/../../log`),
};
