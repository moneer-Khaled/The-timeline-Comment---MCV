const express = require('express')

const route = express('Router')

const pageController = require('../controller/pageController')

route.get('/',pageController.HomePage)

route.post('/Add', pageController.savePost)
route.post('/Comment/:postid', pageController.saveComment)



module.exports= route