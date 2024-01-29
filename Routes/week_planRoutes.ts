import { Router } from 'express';
import { WeekPlanController } from '../Controllers/week_planController';

const weekPlanController = new WeekPlanController()
const router = Router();


router.post('/:programPlanId/create' , weekPlanController.createNewWeekPlan)
router.get('/:id/get' , weekPlanController.getWeekPlanById)
router.delete('/:id/delete' , weekPlanController.deleteWeekPlanById)
router.put('/:id/update' , weekPlanController.updateWeekPlanProgram)



export = router;