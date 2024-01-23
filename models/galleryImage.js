'use strict';



module.exports = (sequelize, DataTypes) => {
    const galleryModel = sequelize.define('galleryImages', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        groupName: {
            type: DataTypes.STRING(100)
        },
        imageName: {
            type: DataTypes.STRING(100)
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
    });

    return galleryModel;
};

