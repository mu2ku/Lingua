import { Router } from 'express'
import * as flashcardCtrl from '../controllers/flashcards.js'
const router = Router()

router.get('/new', isLoggedIn, flashcardCtrl.new)
router.post('/',isLoggedIn, flashcardCtrl.create)

export {
  router
}

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}