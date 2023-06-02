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
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        type: {
            type: DataTypes.STRING,
            enum: NOTICE_BOARD_TYPES,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
           
        },
        description: {
            type: DataTypes.TEXT,
            
        },
        documentName: {
            type: DataTypes.TEXT,
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
