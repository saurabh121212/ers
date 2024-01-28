'use strict';

module.exports = (sequelize, DataTypes) => {
    const pagesDataMobile = sequelize.define('pagesDataMobile', {
        id: { 
            type: DataTypes.BIGINT, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true 
        },
        mainMenu: {
            type: DataTypes.STRING(200)
        },
        subMenu: {
            type: DataTypes.STRING(200),
        },
        pageName: {
            type: DataTypes.STRING(200),
        },
        pageData: {
            type: DataTypes.TEXT('medium'),
        },
        url: {
            type: DataTypes.TEXT,
          }
    });

    return pagesDataMobile;
};
