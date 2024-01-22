import { ProgramPlan } from '../models/program_plan'

export class ProgramPlanRepositories {
    async createProgramPlan() {
        const newProgramPlan = new ProgramPlan({
            description: "description1",
            extendedSubject: "extendedSubject1",
            goals: "goals1",
            picture: "picture1",
            structure: "structure1",
            subject: "subject1"
        })
        newProgramPlan.save()
        return newProgramPlan
    }
}