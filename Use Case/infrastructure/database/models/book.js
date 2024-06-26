"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Book.belongsToMany(models.Member, {
                through: models.BorrowHistory,
                foreignKey: "bookCode",
                otherKey: "memberCode",
                as: "member",
            });
        }
    }
    Book.init(
        {
            code: DataTypes.STRING,
            title: DataTypes.STRING,
            author: DataTypes.STRING,
            stock: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Book",
            tableName: "Books",
        }
    );
    return Book;
};
