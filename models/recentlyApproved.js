'use strict';

const {RECENTLY_APPROVED_TYPES} = require('app/Constants/constant');

const isValidUrl = (value) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i || /^(http?|ftp):\/\/[^\s/$.?#].[^\s]*$/i ;
    if (!regex.test(value)) {
      throw new Error('Invalid URL. Must include http or https protocol');
    }
  };



module.exports = (sequelize, DataTypes) => {
    const recetlyApprovedModel = sequelize.define('recetlyApproved', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        type: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(500),
            allowNull: false
           
        },
        description: {
            type: DataTypes.STRING(500),
            
        },
        documentName: {
            type: DataTypes.STRING(500),
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

    return recetlyApprovedModel;
};
