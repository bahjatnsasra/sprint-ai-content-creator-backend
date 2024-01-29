import { DayStructure } from "../interface/day";
import { WeekPlanRepo } from "./week_planRepo";
import { Day } from "../models/day";


const weekPlanRepo = new WeekPlanRepo()


export class DayRepositories {
    async createDay(weekPlanId: string, dayData: DayStructure) {
        try {
            const newDay = new Day(dayData)
            newDay.save()
            weekPlanRepo.addDayToWeekPlan(weekPlanId,newDay.id)
            return newDay
        } catch (error) {
            throw(error)
        }
    } 

    async getDayById(dayId: string) {
        try {
            const day = await Day.findById(dayId).exec()
            if(!day) {throw ("Can't Find Day")}
            return day
        } catch (error) {
            throw(error)
        }
    }


    async deleteDayByID(dayId: string) {
        try {
            const day = await Day.findById(dayId).exec()
            if(!day) {throw ("Can't Find Day")}
            await Day.findByIdAndDelete({_id:dayId})
        } catch (error) {
            throw(error)
        }
    }

    async updateDayById(dayId: string, data: DayStructure) {
        try {
            const day = await Day.findById(dayId).exec()
            if(!day) throw('Day Not Found')
            await Day.findByIdAndUpdate(dayId,data)
        } catch (error) {
            throw(error)
        }
    }
}