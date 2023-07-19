'use strict'

module.exports = (sequelize, DataTypes) => {
    const contactModel = sequelize.define('contact', {
        branchName: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        branchLocation: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        branchCity:{
              type:DataTypes.STRING(100),
              allowNull:false,
        },
        branchState:{
             type:DataTypes.STRING(100),
             allowNull:false,

        },
        contactNo: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lat:{
            type:DataTypes.DOUBLE,
            allowNull:true
        },

        long:{
            type:DataTypes.DOUBLE,
            allowNull:true,
       },
       isHeadQuater:{
        type:DataTypes.BOOLEAN,
        allowNull:false
       }
    },
    {
        paranoid: true,
        timestamps: true
    });

    return contactModel ;
};
