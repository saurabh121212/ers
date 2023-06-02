'use strict'

module.exports = (sequelize, DataTypes) => {
    const taxcalenderModel = sequelize.define('taxcalender', {
        headingName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        paranoid: true,
        timestamps: true
    });

    return taxcalenderModel ;
};
