import { ProgramPlanRepositories } from "../Repositories/program_planRepo";
import { Request ,Response } from 'express';

const programPlanRepo = new ProgramPlanRepositories();


export class ProgramPlanController {
    async createNewProgramPlan(req: Request , res: Response){
        try {
            const newProgramPlan = req.body
            const weekPlanId = req.params.weekPlanId
            await programPlanRepo.createProgramPlan(newProgramPlan)
            res.status(200).send('program plan created successfully').end()
        } catch (error) {
            res.status(400).send(error).end()
        }
    }

    async getProgramPlanById(req: Request , res: Response){
        try {
            const ProgramPlanId = req.params.id
            const programPlan =  await programPlanRepo.getProgramPlanByID(ProgramPlanId)
            res.status(200).send(programPlan).end()
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async deleteProgramPlanById(req: Request , res: Response){
        try {
            const ProgramPlanId = req.params.id
            await programPlanRepo.deleteProgramPlanByID(ProgramPlanId)
            res.status(200).send('program plan deleted successfully').end()
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async updateProgramPlanById(req: Request , res: Response){
        try {
            const ProgramPlanId = req.params.id
            const newData = req.body
            const updatedProgramPlan = await programPlanRepo.updateProgramPlanByID(ProgramPlanId,newData)
            res.status(200).json({message: 'program plan updated successfully' , date: updatedProgramPlan}).end()
        } catch (error) {
            res.status(404).json(error)
        }
    }
}