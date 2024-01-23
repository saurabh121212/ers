' use strict '
module.exports = (sequelize, DataTypes) => {
    const SettingModel = sequelize.define('setting', {
        facebook: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        instagram:{
              type:DataTypes.STRING(500),
              allowNull:true,
        },
        linkedIn:{
             type:DataTypes.STRING(500),
             allowNull:true,

        },
        youtube: {
            type: DataTypes.STRING(500),
            allowNull: true
        },

        twitter: {
            type: DataTypes.STRING(500),
            allowNull: true
        },

        email: {
            type: DataTypes.STRING(500),
            allowNull: true
        },

        openingHourMonToFri: {
            type: DataTypes.STRING(200),
            allowNull: true
        },

        openingHourSatToSun: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        
        contactAddress: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        contactEmail: {
            type: DataTypes.STRING(200),
            allowNull: true
        },

        Contact1: {
            type: DataTypes.STRING(50),
            allowNull: true
        },

        Contact2: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
},
    {
        paranoid: false,
        timestamps: true
    });

    return SettingModel;
};
