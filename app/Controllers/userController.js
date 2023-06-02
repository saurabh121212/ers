'use strict'

const { users } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
  createUser
}

//create
async function createUser(req, res, next) {
  const { name, email, password } = req.body;
  console.log(users)
  if (!name) {
    return next({ message: "Missing name", status: 400 });
  }

  if (!email) {
    return next({ message: "Missing email", status: 400 });
  }

  if (!password) {
    return next({ message: "Missing password", status: 400 });
  }

  try {
    const user = await BaseRepo.baseCreate(users, { name, email, password });
    res.data = user;
    return next()
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

