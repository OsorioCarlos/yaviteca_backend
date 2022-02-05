const config = {
  origin: 'http://localhost:4200',
  server: {
    host: 'localhost',
    port: 3000
  },
  db: {
    host: 'localhost',
    port: 3306,
    user: 'postgres',
    password: '12345',
    database: 'Yaviteca',
    migrations_folder: '/db/migrations',
    seeds_folder: '/db/seeds'
  }
}
module.exports = config;