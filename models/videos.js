'use strict';


module.exports = (sequelize, DataTypes) => {
    const VideoModel = sequelize.define('videos', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(300),
        },
        description: {
            type: DataTypes.STRING(700),
        },
        yearofupload: {
            type: DataTypes.STRING(100),
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
