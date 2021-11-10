import { Router } from 'express'
import * as langCtrl from '../controllers/languages.js'
const router = Router()

router.get('/', langCtrl.index)
router.post('/',langCtrl.create)
router.delete('/:id', langCtrl.delete)
router.get('/:id/resources/:resourceType', langCtrl.viewResources)


export {
  router
}