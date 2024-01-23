'use strict'

module.exports = (sequelize, DataTypes) => {
    const formModel = sequelize.define('form', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        formName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        fileSize:{
              type:DataTypes.STRING(100),
              allowNull:false,
        },
        fileType:{
             type:DataTypes.STRING(50),
             allowNull:false,

        },
        uploadDate: {
            type: DataTypes.DATE,
        },

        description:{
            type:DataTypes.STRING(500),
            allowNull:true
        },

        fileUrl:{
            type:DataTypes.STRING(800),
            allowNull:false,
       },

    },
    {
        paranoid: true,
        timestamps: true
    });

    return formModel;
};
