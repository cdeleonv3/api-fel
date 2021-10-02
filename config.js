const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: '192.168.0.26',
    user: 'root',
    password: 'cdleon',
    database: 'PRUEBA',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;