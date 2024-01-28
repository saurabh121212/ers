const {pagesDataMobile} = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
    addPageData,
    listPageData,
    removePageData,
    updatePageData
}

//create
async function addPageData(req, res, next) {
    const {mainMenu,subMenu,pageName,pageData,url } = req.body;
    try {
      const  pagesDataMobiles= await BaseRepo.baseCreate(pagesDataMobile, {mainMenu,subMenu,pageName, pageData, url});
      res.data = pagesDataMobiles;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }

  //update
  async function updatePageData(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return next({ message: "Missing Public Notice ID", status: 400 });
    }
    const updateData = {};
    if (req.body.mainMenu) {
      updateData.mainMenu = req.body.mainMenu;
    }
    if (req.body.subMenu) {
      updateData.subMenu = req.body.subMenu;
    }
    if (req.body.pageName) {
      updateData.pageName = req.body.pageName;
    }
    if (req.body.pageData) {
      updateData.pageData = req.body.pageData;
    }
    if (req.body.url) {
      updateData.url = req.body.url;
    }
    try {
      await BaseRepo.baseUpdate(pagesDataMobile, { id }, updateData);
      return next();
    } catch (err) {
      return next(err);
    }
  }
  

  async function listPageData(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip,
      order:[["id","DESC"]],
  }
    try {
        const pagesDataMobiles = await BaseRepo.baseList(pagesDataMobile, params);
        res.data = pagesDataMobiles;
        return next();
    } catch (err) {
        return next(err);
    }
}

//delete
async function removePageData(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const pagesDataMobiles = await BaseRepo.baseDelete(pagesDataMobile, {id: req.params.id });
      if (!pagesDataMobiles) return next({ message: "No Public Notice found", status: 400 });
      res.data = { message: "Notice Board removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }