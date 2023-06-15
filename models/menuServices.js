'use strict';


module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('menuServices', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        menuId: {
            type: DataTypes.INTEGER,
        },
        menuName: {
            type: DataTypes.STRING(300),
        },
        sumMenuName: {
            type: DataTypes.STRING(300),
        },
    },
    {
    paranoid: true,
    timestamps: true
    }
);

    return Model;
};
