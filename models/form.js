'use strict'

  
module.exports = (sequelize, DataTypes) => {
    const formModel = sequelize.define('form', {
        formName: {type: DataTypes.STRING(20),
                    allowNull: false},
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fileSize:{
              type:DataTypes.STRING,
              allowNull:false,
        },
        fileType:{
             type:DataTypes.STRING(50),
             allowNull:false,

        },
        uploadDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        description:{
            type:DataTypes.TEXT,
            allowNull:true
        },

        fileUrl:{
            type:DataTypes.TEXT,
            allowNull:false,
            


       },

    },
    {
        paranoid: true,
        timestamps: true
    });

    return formModel;
};
