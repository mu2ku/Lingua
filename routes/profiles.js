import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
const router = Router()

router.get('/:id', profilesCtrl.show)
router.get('/:id/resources', profilesCtrl.showFavorites)

export {
  router
}