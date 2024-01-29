import { Router } from 'express';
import { DayController } from '../Controllers/dayController';

const dayController = new DayController()
const router = Router();


router.post('/:weekPlanId/create' , dayController.createNewDay)
router.get('/:id/get' , dayController.deleteDayById)
router.delete('/:id/delete' , dayController.deleteDayById)
router.put('/:id/update' , dayController.updateDayById)


export = router;