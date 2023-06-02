/**
 * Created by manoj on 29/6/19.
 */
'use strict';

const {to} = require('services/util.service');
const UserModel = require('models/user')
// const UserRepo = require('app/Repositories/UserRepository');
// const UserMetaRepo = require('app/Repositories/UserMetaRepository');
const {generateJWT} = require('../../services/util.service')

module.exports = {
    logiWithPassword
};

async function logiWithPassword(req, res, next) {
    const body = req.body;

    if (!body['email']) {
        return next({ message: "Email is required", status: 400 });
    }
    if (!body['password']) {
        return next({ message: "password is required", status: 400 });
    }


    try {
        let user = await BaseRepo.baseDetail(UserModel, {
            searchParams: {
                email:body.email,
                status: 'Active'
            }
        });
        if (!user) return next({ message: "Account not found or has been blocked.", status: 400 });
         //check for password match
         const isMatch = await user.comparePassword(body.password);

         if (!isMatch) {
             return next({ message: "Incorrect Password", status: 400 })
         }

        //generate a token for the user
        const token = generateJWT({ userId: user._id});
        res.data = { token };
        return next();
    }
    catch (err) {
        console.log('Error in login : ', err);
        return next(err);
    }
}

