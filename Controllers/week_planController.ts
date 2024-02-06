import { WeekPlanRepo } from '../Repositories/week_planRepo';
import { Request ,Response } from 'express';

const weekPlanRepo = new WeekPlanRepo();


export class WeekPlanController {
    async createNewWeekPlan(req: Request , res: Response){
        try {
            const programPlanId = req.params.programPlanId
            await weekPlanRepo.createWeekPlan(programPlanId)
            res.status(200).send('week plan created successfully').end()
        } catch (error) {
            res.status(400).send(error).end()
        }
    }

    async getWeekPlanById(req: Request , res: Response){
        try {
            const weekPlanId = req.params.id
            const weekPlan =  await weekPlanRepo.getWeekPlanById(weekPlanId)
            res.status(200).send(weekPlan).end()
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async deleteWeekPlanById(req: Request , res: Response){
        try {
            const weekPlanId = req.params.id
            await weekPlanRepo.deleteWeekPlanById(weekPlanId)
            res.status(200).send('week plan deleted successfully').end()
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async updateWeekPlanProgram(req: Request , res: Response){
        try {
            const weekPlanId = req.params.id
            const newData = req.body.programPlan
            const updatedWeekPlan = await weekPlanRepo.updateWeekPlanProgram(weekPlanId,newData)
            res.status(200).json({message: 'week plan updated successfully' , date: updatedWeekPlan}).end()
        } catch (error) {
            res.status(404).json(error)
        }
    }
}