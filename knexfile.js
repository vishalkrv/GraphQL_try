module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5431,
        user: 'heroesuser',
        password: 'heroespassword',
        database: 'heroesdb',
      },
      migrations: {
        directory: './api/db/migrations',
      },
      seeds: {
        directory: './api/db/seeds',
      },
    },
  };