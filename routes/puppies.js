import { Router } from 'express'
const router = Router()


router.get('/', puppiesCtrl.index)
router.get('/:id', puppiesCtrl.show)
router.post('/', puppiesCtrl.create)
router.put('/:id', puppiesCtrl.update)
router.delete('/:id', puppiesCtrl.delete)



export {
  router
}
