import { Router } from 'express'
import * as resourceCtrl from '../controllers/resources.js'
const router = Router()

router.get('/new', isLoggedIn, resourceCtrl.new)
router.post('/',isLoggedIn, resourceCtrl.create)

export {
  router
}

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}