const Sequelize = require("sequelize");

class Faq extends Sequelize.Model {
  static initiate(sequelize) {
    Faq.init(
      {
        faq_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        admin_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: "admin테이블의 id참초",
        },
        user_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false, 
        },
        response: {
          type: Sequelize.TEXT,
          allowNull: true, 
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false, 
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
          comment: "작성일",
        }
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'Faq',
        tableName: 'faq',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    //참조키로 Admin 모델의 admin_id(targetKey)를 admin_id(foreignKey)라는 이름으로 가져옴
    db.Faq.belongsTo(db.Admin, {foreignKey: 'admin_id', targetKey: 'admin_id'});

    //참조키로 User 모델의 user_id(targetKey)를 user_id(foreignKey)라는 이름으로 가져옴
    db.Faq.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'user_id'});
  }
}

module.exports = Faq;
