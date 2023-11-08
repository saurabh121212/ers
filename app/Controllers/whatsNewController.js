const { whatsNew } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
  addWhateNew,
  updateWhateNew,
  listWhateNew,
  removeWhateNew
}


//create
async function addWhateNew(req, res, next) {
  try {
    const addWhateNews = await BaseRepo.baseCreate(whatsNew, req.body);
    res.data = addWhateNews;
    return next();
  } catch (err) {
    console.log("Err: ", err);
    return next(err);
  }
}

//update
async function updateWhateNew(req, res, next) {
  const { id } = req.params;
  console.log(id)
  if (!id) {
    return next({ message: "Missing ID", status: 400 });
  }
  try {
    await BaseRepo.baseUpdate(whatsNew, { id }, req.body);
    res.data = { message: "successfully updated" }
    return next();
  } catch (err) {
    return next(err);
  }
}


async function listWhateNew(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip,
    order:[id,"DESC"]
  }
  try {
    const whateNews = await BaseRepo.baseList(whatsNew, params);
    res.data = whateNews;
    return next();
  } catch (err) {
    return next(err);
  }
}

//delete
async function removeWhateNew(req, res, next) {
  if (!req.params.id)
    return next({ message: "Invalid or missing Id", status: 400 });
  try {
    //check if project exist
    const whateNews = await BaseRepo.baseDelete(whatsNew, { id: req.params.id });
    if (!whateNews) return next({ message: "No id found", status: 400 });

    res.data = { message: " removed successfully", status: 200 };
    return next();
  } catch (err) {
    return next(err);
  }
}