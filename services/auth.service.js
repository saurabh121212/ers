const { User } 	    = require('models');
const validator     = require('validator');
const { to, TE, ReE }    = require('services/util.service');

const getUniqueKeyFromBody = function(body){// this is so they can send in 3 options unique_key, email, or phone and it will work

    //console.log(body);
    //console.log(body.email);

    let unique_key = body.email;
    if(typeof unique_key==='undefined'){
            unique_key = null;
        }
    return unique_key;
}
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

const createUser = async (userInfo) => {
    let unique_key, auth_info, err;

    auth_info={};
    auth_info.status='create';

    unique_key = getUniqueKeyFromBody(userInfo);
    if(!unique_key) TE('An email was not entered.');

    if(validator.isEmail(unique_key)){
        auth_info.method = 'email';
        userInfo.email = unique_key;

        [err, user] = await to(User.create(userInfo));
        if(err)
        {
            TE(err.message);
        }

        return user;

    }else{
        TE('A valid email was not entered.');
    }
}
module.exports.createUser = createUser;

const authUser = async function(userInfo){//returns token
    let unique_key;
    let auth_info = {};
    auth_info.status = 'login';
    unique_key = getUniqueKeyFromBody(userInfo);
    //console.log(unique_key);

    if(!unique_key) TE('Please enter an email to login');


    if(!userInfo.password) TE('Please enter a password to login');

    let user, err;
    if(validator.isEmail(unique_key)){
        auth_info.method='email';

        [err, user] = await to(User.findOne({where:{email:unique_key}}));
        if(err) TE(err.message);

    }else{
        TE('A valid email was not entered');
    }

    if(!user) TE('Not registered');

    [err, user] = await to(user.comparePassword(userInfo.password));

    if(err) TE('Invalid Credentials');

    // delete user["dataValues"]["image"];
    // user["dataValues"]["image_url"] = "/users/image/"+user["id"];

    return user;

};
module.exports.authUser = authUser;