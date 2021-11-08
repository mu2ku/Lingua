import { Router } from 'express'
import * as langCtrl from '../controllers/languages.js'
const router = Router()

router.get('/', langCtrl.index)
router.get('/new',langCtrl.new)

export {
  router
}