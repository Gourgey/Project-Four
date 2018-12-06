const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/japanese-art-${env}`;
const secret = process.env.SECRET || 'ohayo';
module.exports = { port, dbURI, env, secret };
