import { Router } from 'express'
import * as langCtrl from '../controllers/languages.js'
const router = Router()

router.get('/', langCtrl.index)
router.post('/',langCtrl.create)
router.delete('/:id', langCtrl.delete)
router.get('/:id/resources/:resourceType', langCtrl.viewResources)
router.delete('/:id/resources/:resourceType/:resourceId', langCtrl.deleteResource)
router.patch('/:id/resources/:resourceType/:resourceId/addToCollection', langCtrl.addToCollection)
router.patch('/:id/resources/:resourceType/:resourceId/removeFromCollection', langCtrl.removeFromCollection)
router.get('/:id/resources/:resourceType/:resourceId/edit', langCtrl.edit)

export {
  router
}