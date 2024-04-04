'use strict';

module.exports = (sequelize, DataTypes) => {
    const pagesDataSearch = sequelize.define('pagesDataSearch', {
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
        pageCode: {
            type: DataTypes.INTEGER,
        },
        pageUpdateStatus: {
            type: DataTypes.INTEGER,
        },
        pageData: {
            type: DataTypes.TEXT('medium'),
        },
        url: {
            type: DataTypes.TEXT,
          }
    });

    return pagesDataSearch;
};
