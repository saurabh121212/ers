const { menuServices } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
    addSubMenu,
    listSubMenu,
    updateSubMenu,
    removeSubMenu,
    listSubMenuFormsAndMedia
  }


//create
async function addSubMenu(req, res, next) {
    try {
      const addmenuService = await BaseRepo.baseCreate(menuServices, req.body);
      res.data = addmenuService;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }


  // List
  async function listSubMenu(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
    }
    try {
      const listmenuService = await BaseRepo.baseList(menuServices, params);
      res.data = listmenuService;
      return next();
    } catch (err) {
      return next(err);
    }
  }


  //delete
async function removeSubMenu(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const menuServiceDelete = await BaseRepo.baseDelete(menuServices, { id: req.params.id });
      if (!menuServiceDelete) return next({ message: "No id found", status: 400 });
  
      res.data = { message: " removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }
  


  //update
async function updateSubMenu(req, res, next) {
    const { id } = req.params;
    console.log(id)
    if (!id) {
      return next({ message: "Missing ID", status: 400 });
    }
    try {
      await BaseRepo.baseUpdate(menuServices, { id }, req.body);
      res.data = { message: "successfully updated" }
      return next();
    } catch (err) {
      return next(err);
    }
  }


    // List
    async function listSubMenuFormsAndMedia(req, res, next) {

      let allData = {}

      const params = {
        searchParams: {},
        limit: req.limit,
        offset: req.skip
      }
      try {
        const galleryImagesData = await BaseRepo.baseList(galleryImages, params);

        const newsData = await BaseRepo.baseList(news, params);

        const videosData = await BaseRepo.baseList(videos, params);
        
        allData = {galleryImagesData , newsData , videosData}

        console.log("galleryImagesData ", galleryImagesData)
        console.log("newsData ", newsData)
        console.log("videosData ", videosData)

        console.log("All Data ", allData);

        res.data = allData;
        return next();
      } catch (err) {
        return next(err);
      }
    }