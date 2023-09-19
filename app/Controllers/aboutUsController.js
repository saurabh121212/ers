
const {aboutus} = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
    addAboutUsTeam,
    listAboutUsTeam,
    updateAboutUsTeam,
    removeAboutUsTeam
}

//create
async function addAboutUsTeam(req, res, next) {
    const {name,description,possition,url} = req.body;
    if (!name) {
      return next({ message: "Missing name", status: 400 });
    }
    if (!possition) {
      return next({ message: "Missing possition", status: 400 });
    }
    if (!description) {
      return next({ message: "Missing description", status: 400 });
    }
    if (!url) {
        return next({ message: "Missing Image", status: 400 });
      }
    try {
      const  aboutUs = await BaseRepo.baseCreate(aboutus, {name,description,possition, url});
      res.data = aboutUs;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }

  //update
  async function updateAboutUsTeam(req, res, next) {
    const { id } = req.params;
  console.log(id)
    if (!id) {
      return next({ message: "Missing About Team ID", status: 400 });
    }
  
    const updateData = {};
    if (req.body.name) {
      updateData.name = req.body.name;
    }
    if (req.body.possition) {
      updateData.possition = req.body.possition;
    }
    if (req.body.description) {
      updateData.description = req.body.description;
    }
    if (req.body.url) {
      updateData.url = req.body.url;
    }
  
    try {
      await BaseRepo.baseUpdate(aboutus, { id }, updateData);
      return next();
    } catch (err) {
      return next(err);
    }
  }
  

  async function listAboutUsTeam(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
  }
    try {
        const aboutUs = await BaseRepo.baseList(aboutus, params);
        res.data = aboutUs;
        return next();
    } catch (err) {
        return next(err);
    }
}

//delete
async function removeAboutUsTeam(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const noticeBoards = await BaseRepo.baseDelete(aboutus, {id: req.params.id });
      if (!noticeBoards) return next({ message: "No About Us Team Not found", status: 400 });
  
      res.data = { message: "Team removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }