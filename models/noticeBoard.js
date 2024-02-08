'use strict';

const {NOTICE_BOARD_TYPES} = require('app/Constants/constant');

const isValidUrl = (value) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i || /^(http?|ftp):\/\/[^\s/$.?#].[^\s]*$/i ;
    if (!regex.test(value)) {
      throw new Error('Invalid URL. Must include http or https protocol');
    }
  };

module.exports = (sequelize, DataTypes) => {
    const noticeBoardModel = sequelize.define('noticeBoard', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        date: {
            type: DataTypes.DATE,
        },
        notice: {
            type: DataTypes.TEXT,
        },
        documentName: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        documentUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               isValidUrl
            }
            
        }
    });

    return noticeBoardModel;
};
