'use strict';


module.exports = (sequelize, DataTypes) => {
    const VideoModel = sequelize.define('videos', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        name: {
            type: DataTypes.STRING(100),
        },
        description: {
            type: DataTypes.TEXT,
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        uploadDate: {
            type: DataTypes.DATE,
        }
    });

    return VideoModel;
};
