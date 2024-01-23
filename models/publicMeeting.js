'use strict';

module.exports = (sequelize, DataTypes) => {
    const publicMeetingModel = sequelize.define('publicmeeting', {
        id: 
        { 
            type: DataTypes.BIGINT, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true 
        },
        publicMeetingName: {
            type: DataTypes.STRING(200)
        },
        uploadDate: {
            type: DataTypes.DATE,
        },
        description: {
            type: DataTypes.TEXT('medium'),
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
    });

    return publicMeetingModel;
};
