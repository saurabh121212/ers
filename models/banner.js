'use strict';

module.exports = (sequelize, DataTypes) => {
  const ImageBannerModel = sequelize.define('bannerImages', {
    imageName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    imageurl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    uploadDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    paranoid: true,
    timestamps: true
  });

  return ImageBannerModel;
};
