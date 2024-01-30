import { Request ,Response } from 'express';
import { OpenAiService } from '../utils/openAiUtils';
const openAiService = new OpenAiService()

export class OpenAiController {
    async generateSubjects(req: Request , res: Response){
        try {
            const subjectList = await openAiService.generateSubjects()
            res.status(200).send(subjectList).end()
        } catch (error) {
            res.status(400).send(error).end()
        }
    }
}