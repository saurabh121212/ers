const { feedback } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
    addFeedback,
    listUserFeedback,
    removeUserFeedback
  }


//create
async function addFeedback(req, res, next) {
    const { name, email, phone_number, feedbacktype,feedback_description,del_status} = req.body;
    if (!name) {
      return next({ message: "Missing videos name", status: 400 });
    }
    if (!email) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const Userfeedback = await BaseRepo.baseCreate(feedback,{ name, email, phone_number, feedbacktype,feedback_description,del_status });
      res.data = Userfeedback;
      return next();
         //return feedback.toJSON();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }
  

  async function listUserFeedback(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip,
      order:[["id","DESC"]]
    }
    try {
      const UserfeedbackList = await BaseRepo.baseList(feedback, params);
      res.data = UserfeedbackList;
      return next();
    } catch (err) {
      return next(err);
    }
  }
  
  //delete
  async function removeUserFeedback(req, res, next) {
    console.log("updated ",req.params.id," check ",req.body.del_status)
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const feedback_delete = await BaseRepo.baseUpdate(feedback, 
        { id: req.params.id }, { del_status: req.body.del_status});

      if (!feedback_delete) return next({ message: "No Feedback found", status: 400 });
      res.data = { message: "Feedback removed successfully", status: 200 };

      return next();
    } catch (err) {
      return next(err);
    }
  }