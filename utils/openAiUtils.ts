import  axios  from 'axios'
import { OpenAIUrl, openAiheaders, OpenAIGenerateSubjects} from './openAiConsts'

export class OpenAiService {

    async generateSubjects() {
        try {
			const responseData = (await axios({
				method: 'post',
				url: OpenAIUrl,
				data: OpenAIGenerateSubjects,
				headers: openAiheaders
			})).data.choices[0].message.function_call.arguments
			const subjects = (JSON.parse(responseData)).subjectList
			return subjects
		} catch (error) {
			throw error
		}
    }
}
