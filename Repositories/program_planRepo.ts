import { ProgramPlan } from '../models/program_plan'
import { ProgramPlanData, ProgramPlanStructure } from "../interface/ProgramPlan";
import { WeekPlanRepo } from './week_planRepo';

const weekPlanRepo = new WeekPlanRepo()

export class ProgramPlanRepositories {

    async createProgramPlan(programPlan : ProgramPlanData) {
        try {
            const newProgramPlan = new ProgramPlan(programPlan)
            await newProgramPlan.save()
            return newProgramPlan
        } catch (error) {
            throw(error)
        }
    }

    async getProgramPlanByID(programPlanId: string) {
        try {
            const programPlan = await ProgramPlan.findById(programPlanId).exec()
            if(!programPlan) {throw ("Can't Find Program Plan")}
            return programPlan
        } catch (error) {
            throw(error)
        }
    }

    async deleteProgramPlanByID(programPlanId: string){
        try {
            const programPlan = await ProgramPlan.findById(programPlanId).exec()
            if(!programPlan) {throw ("Can't Find Program Plan")}
            await ProgramPlan.findByIdAndDelete({_id:programPlanId})
        } catch (error) {
            throw(error)
        }
    }

    async updateProgramPlanByID(programPlanId: string , data : ProgramPlanStructure) {
        try {
            const programPlan = await ProgramPlan.findById(programPlanId).exec()
            if(!programPlan) {throw ("Can't Find Program Plan")}
            await ProgramPlan.findByIdAndUpdate(programPlanId, data)
        } catch (error) {
            throw(error)
        }
    }
}