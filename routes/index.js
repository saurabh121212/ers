const express = require('express')
const router = express.Router()

const authRouter = require('./auth')
const userRouter = require('./user')
const videoRouter = require('./video')
const fileRouter = require('./file')
const imageRouter = require('./imagebanner')
const galleryImageRouter = require('./galleryImage')

const newsRouter = require('./news')
const mediaRouter = require('./media')

const settingRouter = require('./setting')
const formRouter = require('./form')
const contactRouter = require('./contact')
const taxRouter = require('./taxcalender')

const csrRouter = require('./csr')
const whateNewRouter = require('./whatNew')
const noticeBoardRouter = require('./noticeBoard')
const publicationsRouter = require('./publication')
const tenderRouter = require('./tender')

const practiceNoteRouter = require('./practiceNote')
const publicMeetingRouter = require('./publicMeeting')
const aboutusRouter = require('./aboutus')



const recentlyApprovedRouter = require('./recentlyApproved')
const userFeedbackRouter = require('./userFeedback')

const texItemCodesRouter = require('./textIteamCode')
const FAQRouter = require('./faq')
const menuServicesRouter = require('./menuService')
const pagesDataMobileRouter = require('./pagesDataMobile')
const ourResourceBusinessRouter = require('./ourResourceBusiness')
const ourResourceTravellingRouter = require('./ourResourceTravelling')






router.get('/', (req, res, next) => {
  res.send({msg: 'Node Server Working...'});
});

router.use('/auth',authRouter)                 
router.use('/users',userRouter)
router.use('/files',fileRouter)
router.use('/banner-images',imageRouter)    
router.use('/videos',videoRouter)        

router.use('/gallery-images',galleryImageRouter)     
router.use('/news-images',newsRouter)
router.use('/media',mediaRouter)

router.use('/setting',settingRouter)
router.use('/form',formRouter)
router.use('/contact',contactRouter)
router.use('/taxcalender',taxRouter)     

router.use('/csr',csrRouter)    
router.use('/whateNew',whateNewRouter)
router.use('/noticeBoard',noticeBoardRouter)
router.use('/recentlyApproved',recentlyApprovedRouter)
router.use('/userFeedback',userFeedbackRouter)
router.use('/textIteamCode',texItemCodesRouter)
router.use('/faq',FAQRouter)
router.use('/news',newsRouter)
router.use('/menuService',menuServicesRouter)
router.use('/publication',publicationsRouter)
router.use('/tender',tenderRouter)
router.use('/practiceNote',practiceNoteRouter)
router.use('/publicMeeting',publicMeetingRouter)
router.use('/aboutus',aboutusRouter)
router.use('/pagesDataMobile',pagesDataMobileRouter)

router.use('/ourResourceBusiness',ourResourceBusinessRouter)
router.use('/ourResourceTravelling',ourResourceTravellingRouter)


module.exports = router;