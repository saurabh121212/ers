'use strict';


module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('whatsNew', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        name: {
            type: DataTypes.STRING(400),
            allowNull:false
        },
        description: {
            type: DataTypes.TEXT,
        },
        documentName: {
            type: DataTypes.STRING(400),
        },
        documentUrl: {
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
