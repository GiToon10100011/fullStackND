const { Sequelize } = require("sequelize");

const config = require("../config/config").development;
//해당 객체를 통해 DB연결, 모델정의, 쿼리 실행등을 한다.
const sequelize = new Sequelize(config);
//모델과 sequelize 인스턴스들을 모아둘 곳
// db.sequelize = sequelize; //실제 DB연결 객체
// db.Sequelize = Sequelize; // Sequelize 라이브러리
const db = { sequelize, Sequelize };
db.Product = require("./product")(sequelize, Sequelize);

module.exports = db;
