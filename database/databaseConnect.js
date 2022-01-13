const { createConnection } = require("typeorm");
class DatabaseConnect {
  constructor(obj, u = "", p = "") {
    this.type = obj.type;
    this.host = obj.host;
    this.port = obj.port;
    this.database = obj.database;
    this.username = u || obj.username;
    this.password = p || obj.password;
    this.n_conn = null;
  }

  getConnection(arrEnt = []) {
    return createConnection({
      type: this.type,
      host: this.host,
      port: this.port,
      database: this.database,
      username: this.username,
      password: this.password,
      entities: [],
      autoSchemaSync: true,
    });
  }

  close(cnn) {
    cnn.release();
    cnn.close();
  }
}
module.exports = {
  DatabaseConnect,
};
