import { Router } from 'express';
import { ProgramPlanController } from "../Controllers/program_planController";

const programPlanController = new ProgramPlanController()
const router = Router();


router.post('/create' , programPlanController.createNewProgramPlan)
router.get('/:id/get' , programPlanController.getProgramPlanById)
router.delete('/:id/delete' , programPlanController.deleteProgramPlanById)
router.put('/:id/update' , programPlanController.updateProgramPlanById)


export = router;