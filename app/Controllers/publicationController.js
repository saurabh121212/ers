
const {publications} = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
    addPublication,
    listPublication,
    updatePublication,
    removePublication
}

//create
async function addPublication(req, res, next) {
    const {type,description,documentName, coverPhoto, documentUrl } = req.body;
    if (!type) {
        return next({ message: "Missing Publications type", status: 400 });
      }
    try {
      const  publicationsValues = await BaseRepo.baseCreate(publications, {type, description, documentName, coverPhoto, documentUrl});
      res.data = publicationsValues;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
}

  //update
  async function updatePublication(req, res, next) {
    const { id } = req.params;
  console.log(id)
    if (!id) {
      return next({ message: "Missing Publications ID", status: 400 });
    }
  
    const updateData = {};
    if (req.body.type) {
      updateData.type = req.body.type;
    }
    if (req.body.name) {
      updateData.name = req.body.name;
    }
    if (req.body.description) {
      updateData.description = req.body.description;
    }
    if (req.body.documentName) {
      updateData.documentName = req.body.documentName;
    }
    if (req.body.documentUrl) {
      updateData.documentUrl = req.body.documentUrl;
    }
    if (req.body.coverPhoto) {
      updateData.coverPhoto = req.body.coverPhoto;
    }
  
    try {
      await BaseRepo.baseUpdate(publications, { id }, updateData);
      return next();
    } catch (err) {
      return next(err);
    }
  }
  

  async function listPublication(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
  }
    try {
        const publicationsValues = await BaseRepo.baseList(publications, params);
        res.data = publicationsValues;
        return next();
    } catch (err) {
        return next(err);
    }
}

//delete
async function removePublication(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const publicationsValues = await BaseRepo.baseDelete(publications, {id: req.params.id });
      if (!publicationsValues) return next({ message: "No Notice Board found", status: 400 });
  
      res.data = { message: "Publications removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }