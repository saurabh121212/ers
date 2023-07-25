'use strict'

const {Multer} = require('../services/multer')
const mimeTypes = {
    'image': ['image/jpg', 'image/jpeg', 'image/png', 'image/svg'],
    'document': ['application/pdf','application/msword', "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
}

const storeDestination = {
    'bannerImage': "banner-images/",
    'galleryImage': "gallery-images/",
    'newsImage': "news-images/",
    'csrImage': "csr-images/",
    'formfile':"form-files/",
    'noticeboard':"noticeboard-files/",
    'recentapproved':"recentapproved-files/",
    'publications':"publication-files/",
    'tender':"tender-files/"
}

module.exports =  (fileType, fileSize, filePath) => {
        const uploader = new Multer(mimeTypes[fileType], fileSize, storeDestination[filePath]);
        return uploader.upload
}
