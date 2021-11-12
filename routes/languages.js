import { Router } from 'express'
import * as langCtrl from '../controllers/languages.js'
const router = Router()

router.get('/', isLoggedIn, langCtrl.index)
router.post('/', isLoggedIn, langCtrl.create)
router.delete('/:id', isLoggedIn, langCtrl.delete)
router.get('/:id/resources/:resourceType', isLoggedIn, langCtrl.viewResources)
router.delete('/:id/resources/:resourceType/:resourceId', isLoggedIn, langCtrl.deleteResource)
router.patch('/:id/resources/:resourceType/:resourceId/addToCollection', isLoggedIn, langCtrl.addToCollection)
router.patch('/:id/resources/:resourceType/:resourceId/removeFromCollection', isLoggedIn, langCtrl.removeFromCollection)
router.get('/:id/resources/:resourceType/:resourceId/edit', isLoggedIn, langCtrl.edit)
router.put('/:id/resources/:resourceType/:resourceId', isLoggedIn, langCtrl.update)

export {
  router
}

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}