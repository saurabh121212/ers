'use strict';

module.exports = (sequelize, DataTypes) => {
    const paymentLinkModel = sequelize.define('paymentLinks', {
        id: { type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fileUrl: {
            type: DataTypes.TEXT,
          }
    });

    return paymentLinkModel;
};
