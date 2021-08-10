const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");

class App {

  port = 3001;
  
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
    this.express.listen(this.port, () => console.log("Rodando,", this.port));
  }

  database() {
    mongoose.connect(
      db.uri, { useNewUrlParser: true, useUnifiedTopology: true }
    );

    mongoose.connection.once("open", (_) => {
      console.log("Connection URI:", db.uri);
      console.log("@edermxf - @ederhmaia")
    });

    mongoose.connection.on("error", (err) => {
      console.error("err:", db.uri);
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }

}

module.exports = new App().express;
