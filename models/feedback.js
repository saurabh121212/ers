'use strict';

module.exports = (sequelize, DataTypes) => {
    const feedback = sequelize.define('feedback', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        name: {
            type: DataTypes.STRING(100),
        },
        email: {
            type: DataTypes.TEXT,
        },
        phone_number: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        feedbacktype: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        feedback_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        del_status: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    return feedback;
};
