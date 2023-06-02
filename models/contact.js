'use strict'

module.exports = (sequelize, DataTypes) => {
    const contactModel = sequelize.define('contact', {
        branchName: {type: DataTypes.STRING(20),
                    allowNull: false},
        branchLocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branchCity:{
              type:DataTypes.STRING,
              allowNull:false,
        },
        branchState:{
             type:DataTypes.STRING(50),
             allowNull:false,

        },
        contactNo: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lat:{
            type:DataTypes.STRING,
            allowNull:true
        },

        long:{
            type:DataTypes.STRING(20),
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
