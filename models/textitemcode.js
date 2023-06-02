'use strict';

module.exports = (sequelize, DataTypes) => {
    const textitemcode = sequelize.define('textitemcode', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        text_type: {
            type: DataTypes.STRING(200),
        },
        text_type_two: {
            type: DataTypes.STRING(200),
       },
        item_name: {
            type: DataTypes.STRING(200),
        },
        item_code: {
            type: DataTypes.STRING(200),
        },
        del_status: {
            type: DataTypes.STRING(200),
        }
    },
    {
    paranoid: true,
    timestamps: true
    }
);

    return textitemcode;
};
