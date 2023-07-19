'use strict';


module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('faq', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        use_for: {
            type: DataTypes.STRING(200),
            allowNull:false
        },
        question: {
            type: DataTypes.TEXT,
        },
        answer: {
            type: DataTypes.TEXT,
        },
        question_cat: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
    paranoid: true,
    timestamps: true
    }
);

    return Model;
};
