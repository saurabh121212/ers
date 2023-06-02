'use strict';

module.exports = (sequelize, DataTypes) => {
    const stakeholderLinkModel = sequelize.define('stakeholderLinks', {
        id: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fileUrl: {
            type: DataTypes.TEXT,
          }
    });

    return stakeholderLinkModel;
};
