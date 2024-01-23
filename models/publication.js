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
            type: DataTypes.TEXT,
        },
        documentName: {
            type: DataTypes.STRING,
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
