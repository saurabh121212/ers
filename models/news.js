'use strict';

module.exports = (sequelize, DataTypes) => {
    const newsModel = sequelize.define('news', {
        id: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
        newsName: {
            type: DataTypes.STRING(200)
        },
        uploadDate: {
            type: DataTypes.DATE,
        },
        description: {
            type: DataTypes.TEXT('medium'),
        },
        author_name: {
            type: DataTypes.STRING(400),
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
    });

    return newsModel;
};
