import { ProgramPlanData, ProgramPlanStructure } from "../interface/ProgramPlan";
import { OpenAiService } from "../utils/openAiUtils";
const openAiService = new OpenAiService()


export class ProgramPlanSerivce {
    async programPlanHelper (requestData : ProgramPlanData) {
        const programPlan: ProgramPlanData = {
            subject:  requestData.subject,
            structure: await openAiService.generateProgramStructure(requestData.subject,requestData.goals,requestData.contentType),
            goals: requestData.goals,
            contentType:requestData.contentType,
            picture: requestData.picture,
        } ;
        return programPlan
    }
}