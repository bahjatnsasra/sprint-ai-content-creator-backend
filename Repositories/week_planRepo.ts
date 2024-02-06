import { WeekPlanStructure } from "../interface/WeekPlan";
import { WeekPlan } from "../models/week_plan";


export class WeekPlanRepo {
    async createWeekPlan(programPlanId: String) {
        try {
            const newWeekPlan = new WeekPlan()
            await newWeekPlan.save()
            await newWeekPlan.updateOne({programPlan: programPlanId})
            return newWeekPlan
        } catch (error) {
            throw(error)
        }
    }

    async getWeekPlanById(weekPlanId: string) {
        try {
            const weekPlan = await WeekPlan.findById(weekPlanId)
            .populate("dayPlans").populate("programPlan").exec()
            if(!weekPlan) throw('Week Plan Not Found')
            return weekPlan
        } catch (error) {
            throw(error)
        }
    }

    async deleteWeekPlanById(weekPlanId: string) {
        try {
            const weekPlan = await WeekPlan.findById(weekPlanId).exec()
            if(!weekPlan) throw('Week Plan Not Found')
            await WeekPlan.findByIdAndDelete(weekPlanId)
        } catch (error) {
            throw(error)
        }
    }


    async updateWeekPlanProgram(weekPlanId: string, programPlanId: string){
        try {
            const weekPlan = await WeekPlan.findById(weekPlanId).exec()
            if(!weekPlan) throw('Week Plan Not Found')
            await weekPlan.updateOne({programPlan: programPlanId})
        } catch (error) {
            throw(error)
        }
    }

    async addDayToWeekPlan(weekPlanId: string, dayPlanId: string){
        try {
            const weekPlan = await WeekPlan.findById(weekPlanId).exec()
            if(!weekPlan) throw('Week Plan Not Found')
            await WeekPlan.findByIdAndUpdate(
                {_id: weekPlanId},
                {$push: {dayPlans:dayPlanId}}
            )
        } catch (error) {
            throw(error)
        }
    }

    
}