

const { news } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
  addNews,
  listNews,
  removeNews,
  updateNews
}

//create
async function addNews(req, res, next) {
    const { newsName, uploadDate, description, url } = req.body;
    console.log(news)
    if (!newsName) {
      return next({ message: "Missing news name", status: 400 });
    }
    if (!url) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const  inNews= await BaseRepo.baseCreate(news, { newsName, uploadDate, description, url });
      res.data = inNews;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }

//update
async function updateNews(req, res, next) {
  const { id } = req.params;
  console.log(id)
  if (!id) {
    return next({ message: "Missing news ID", status: 400 });
  }

  const updateData = {};
  if (req.body.newsName) {
    updateData.newsName = req.body.newsName;
  }
  if (req.body.uploadDate) {
    updateData.uploadDate = req.body.uploadDate;
  }
  if (req.body.description) {
    updateData.description = req.body.description;
  }
  if (req.body.url) {
    updateData.url = req.body.url;
  }

  try {
    await BaseRepo.baseUpdate(news, { id }, updateData);
    return next();
  } catch (err) {
    return next(err);
  }
}




async function listNews(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip
  }
  try {
    const inNews = await BaseRepo.baseList(news, params);
    res.data = inNews;
    return next();
  } catch (err) {
    return next(err);
  }
}

//delete
async function removeNews(req, res, next) {
  if (!req.params.id)
    return next({ message: "Invalid or missing Id", status: 400 });
  try {
    //check if project exist
    const inNews = await BaseRepo.baseDelete(news, { id: req.params.id });
    if (!inNews) return next({ message: "No news found", status: 400 });

    res.data = { message: "news removed successfully", status: 200 };
    return next();
  } catch (err) {
    return next(err);
  }
}