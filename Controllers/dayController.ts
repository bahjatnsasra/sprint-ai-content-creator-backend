import { DayRepositories } from '../Repositories/dayRepo';
import { Request ,Response } from 'express';

const dayRepo = new DayRepositories();


export class DayController {
    async createNewDay(req: Request , res: Response){
        try {
            const newday = req.body
            const weekPlanId = req.params.weekPlanId
            await dayRepo.createDay(weekPlanId, newday)
            res.status(200).send('day created successfully').end()
        } catch (error) {
            res.status(400).send(error).end()
        }
    }

    async getDayById(req: Request , res: Response){
        try {
            const dayId = req.params.id
            const day =  await dayRepo.getDayById(dayId)
            res.status(200).send(day).end()
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async deleteDayById(req: Request , res: Response){
        try {
            const dayId = req.params.id
            await dayRepo.deleteDayByID(dayId)
            res.status(200).send('day deleted successfully').end()
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async updateDayById(req: Request , res: Response){
        try {
            const dayId = req.params.id
            const newData = req.body
            const updatedDay = await dayRepo.updateDayById(dayId,newData)
            res.status(200).json({message: 'day updated successfully' , date: updatedDay}).end()
        } catch (error) {
            res.status(404).json(error)
        }
    }
}