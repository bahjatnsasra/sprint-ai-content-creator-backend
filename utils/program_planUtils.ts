import { ProgramPlanStructure } from "../interface/ProgramPlan";
import { OpenAiService } from "../utils/openAiUtils";
const openAiService = new OpenAiService()


export class ProgramPlanSerivce {
    async programPlanHelper (requestData : ProgramPlanStructure) {
        const programPlan: ProgramPlanStructure = {
            subject:  requestData.subject,
            contentType:requestData.contentType,
            goals: requestData.goals,
            picture: requestData.picture,
            structure:await openAiService.generateProgramStructure(requestData.subject,requestData.goals,requestData.contentType),
            description:'',
            extendedSubject: '',
        } ;

        return programPlan
    }
}