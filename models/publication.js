'use strict';

module.exports = (sequelize, DataTypes) => {
    const publicationModel = sequelize.define('publications', {
        id: 
        { 
            type: DataTypes.BIGINT, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true 
        },
        type: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(600),
        },
        documentName: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        coverPhoto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documentUrl: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
    });

    return publicationModel;
};
