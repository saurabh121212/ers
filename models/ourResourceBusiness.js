'use strict';

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('ourResourceBusiness', {
        id: {
            type: DataTypes.BIGINT,
             allowNull: false, 
             primaryKey: true, 
             autoIncrement: true
            },
        question: {
            type: DataTypes.TEXT,
        },
        answer: {
            type: DataTypes.TEXT,
        },
    },
    {
    paranoid: true,
    timestamps: true
    }
);

    return Model;
};
