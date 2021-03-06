import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:id/resources', isLoggedIn, profilesCtrl.showFavorites)
router.put('/:id', isLoggedIn, profilesCtrl.update)

router.get('/:id/flashcards/new', isLoggedIn, profilesCtrl.new)
router.post('/:id/flashcards',isLoggedIn, profilesCtrl.createFlashcard)

export {
  router
}

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}