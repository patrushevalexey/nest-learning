import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
require('dotenv').config();

module.exports = {
  client: 'pg',
  useNullAsDefault: true,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  seed: {
    directory: __dirname + '/seeds',
  },

  ...knexSnakeCaseMappers(),
} as Knex.Config;
