'use strict';

module.exports = (sequelize, DataTypes) => {
    const tenderModel = sequelize.define('tenders', {
        id: 
        { 
            type: DataTypes.BIGINT, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true 
        },
        tenderName: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        deadline: {
            type: DataTypes.DATE,
        },
        publishedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        reference: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        documentUrl: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
    });

    return tenderModel;
};
