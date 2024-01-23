

const { news } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
  addNews,
  listNews,
  removeNews,
  updateNews,
  singleNewsDetailById
}

//create
async function addNews(req, res, next) {
    const { newsName, uploadDate, description, url , author_name } = req.body;
    console.log(news)
    if (!newsName) {
      return next({ message: "Missing news name", status: 400 });
    }
    if (!url) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const  inNews= await BaseRepo.baseCreate(news, { newsName, uploadDate, description, url , author_name});
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
  if (req.body.author_name) {
    updateData.author_name = req.body.author_name;
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


async function singleNewsDetailById(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip,
    id: req.params.id
  }

  console.log("idis ",params.id)
  try {
    const inNews = await BaseRepo.baseFindById(news, params);
    res.data = inNews;
    return next();
  } catch (err) {
    return next(err);
  }
}

async function listNews(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip,
    order:[["id","DESC"]],
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