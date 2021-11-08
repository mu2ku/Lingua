import { Router } from 'express'
import * as resourceCtrl from '../controllers/resources.js'
const router = Router()

router.get('/new', resourceCtrl.new)
router.post('/',resourceCtrl.create)

export {
  router
}