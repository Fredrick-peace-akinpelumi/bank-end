const express = require('express');
const { allUser } = require('../controllers/user/allUser');
const {test} = require('../controllers/user/test')
const router = express.Router();
const { userSignup,UserSignin } = require('../controllers/user/signup');
const userModel = require('../model/userModels');


// GetAllUsers
router.get(('/'), allUser);

// AddUser
router.post('/user/signup', userSignup)
router.post("/user/signin",UserSignin)

router.get('/test', test)

module.exports = router