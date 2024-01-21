const { corporateResponsibility } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
  addCsr,
  listCsr,
  removeCsr,
  updateCsr
}

//create
async function addCsr(req, res, next) {
  const { name, description, uploadDate, url } = req.body;
  if (!name) {
    return next({ message: "Missing corporate responsibility name ", status: 400 });
  }
  if (!url) {
    return next({ message: "Missing url", status: 400 });
  }
  try {
    const csrs = await BaseRepo.baseCreate(corporateResponsibility, { name, description, uploadDate, url });
    res.data = csrs;
    return next();
  } catch (err) {
    console.log("Err: ", err);
    return next(err);
  }
}

//update
async function updateCsr(req, res, next) {
  const { id } = req.params;
  if (!id) {
    return next({ message: "Missing corporateResponsibility ID", status: 400 });
  }
  try {
    await BaseRepo.baseUpdate(corporateResponsibility, { id }, req.body);
    res.data = { messsage: "successfully updated " }
    return next();
  } catch (err) {
    return next(err);
  }
}

async function listCsr(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip,
    order:[["id","DESC"]]
  }
  
  try {
    const csrs = await BaseRepo.baseList(corporateResponsibility, params);
    res.data = csrs;
    return next();
  } catch (err) {
    return next(err);
  }
}

//delete
async function removeCsr(req, res, next) {
  if (!req.params.id)
    return next({ message: "Invalid or missing Id", status: 400 });
  try {
    //check if project exist
    const csrs = await BaseRepo.baseDelete(corporateResponsibility, { id: req.params.id });
    if (!csrs) return next({ message: "No corporate responsibility found", status: 400 });

    res.data = { message: "corporate responsibility removed successfully", status: 200 };
    return next();
  } catch (err) {
    return next(err);
  }
}