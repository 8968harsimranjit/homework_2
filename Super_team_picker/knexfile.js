module.exports = {

  development: {
    client: "pg",

    connection: {
      database: "teamPicker",
      username: 'prabhjot',
      password: '21252829'
    },

    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }

};
