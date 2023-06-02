const { videos, news, galleryImages } = require('models');
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
  listMedia
}

async function listMedia(req, res, next) {
  try {
    const latestVideos = await BaseRepo.baseList(videos, { order: [['createdAt', 'DESC']], limit: 4 });
    const latestNews = await BaseRepo.baseList(news, { order: [['createdAt', 'DESC']], limit: 4 });
    const latestGalleryImages = await BaseRepo.baseList(galleryImages, { order: [['createdAt', 'DESC']], limit: 4 });

    const latestVideosNames = (Array.isArray(latestVideos.rows)) ? latestVideos.rows.map(video => video.name) : [];
    const latestNewsNames = (Array.isArray(latestNews.rows)) ? latestNews.rows.map(newsItem => newsItem.newsName) : [];
    const latestGalleryImagesNames = (Array.isArray(latestGalleryImages.rows)) ? latestGalleryImages.rows.map(image => image.groupName) : [];

    const latestMedia = {
      videos: latestVideosNames,
      news: latestNewsNames,
      galleryImages: latestGalleryImagesNames
    };

    res.data = latestMedia;
    return next();
  } catch (err) {
    return next(err);
  }
}

