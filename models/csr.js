'use strict';


module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('corporateResponsibility', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        name: {
            type: DataTypes.STRING(100)
           // unique: true,
            
        },
        description: {
            type: DataTypes.TEXT,
        },
        uploadDate: {
            type: DataTypes.DATE,
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
    });

    return Model;
};
