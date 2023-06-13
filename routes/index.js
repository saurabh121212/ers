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
const recentlyApprovedRouter = require('./recentlyApproved')
const userFeedbackRouter = require('./userFeedback')

const texItemCodesRouter = require('./textIteamCode')
const FAQRouter = require('./faq')



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



module.exports = router;