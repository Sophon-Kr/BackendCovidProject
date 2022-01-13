const DataBase = {
  covid: {
    DEFAULT: {
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "1234",
      database: "covidmodel",
    },
    //   mongodb: {
    //     type: 'c',
    //     host: '127.0.0.1',
    //     port: 27017,
    //     username: '',
    //     password: '',
    //     database: 'devtest',
    //     synchronize: true
    //   },
  },
};

module.exports = {
  DatabaseConfig() {
    return DataBase.covid.DEFAULT;
  },
};
