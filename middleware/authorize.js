const jsonwebtoken = require("jsonwebtoken")
//const userInfo = require("../modules/user/DAO").info;

module.exports = function (...userTypes) {
  return async function (req, res, next) {
  
    let jwt = req.header("authorization");
  
    if(!jwt) {
      req.user = {
          role: "public"
      }
      // return res.status(402).json({
      //   msg: "JWT Token Not Available"
      // })
    }
    else {
      try {
        console.log(jwt);
        let data = jsonwebtoken.verify(jwt, process.env.JWT_ENCRYPTION);
       
        req.user = {
          status: "User varifiy successfully"
        }
  
      } catch(err) {
        console.log(err)
        return res.status(402).json({
          msg: "Invalid token"
        })
      }
    }
    
    next();
  }
} 