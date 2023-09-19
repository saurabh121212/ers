'use strict';

module.exports = (sequelize, DataTypes) => {
    const aboutUsModel = sequelize.define('aboutus', {
        id: 
        {
            type: DataTypes.BIGINT, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING(400)
        },
        possition: {
            type: DataTypes.STRING(400)
        },
        description: {
            type: DataTypes.TEXT('medium'),
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
    });

    return aboutUsModel;
};
