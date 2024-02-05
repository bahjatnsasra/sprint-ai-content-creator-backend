import  axios  from 'axios'
import { OpenAIGenerateDescription, OpenAIGenerateSubjects, OpenAIGenerateSubTopics, requestOptions} from './openAiConsts'

export class OpenAiService {

    async generateSubjects() {
        try {
			requestOptions.data = OpenAIGenerateSubjects
			const responseData = (await axios(requestOptions)).data.choices[0].message.function_call.arguments
			const subjects = (JSON.parse(responseData)).subjectList
			console.log(subjects);
			return subjects
		} catch (error) {
			throw error
		}
    }

	async generateSubTopics(subject: string) {
		try {
			requestOptions.data = OpenAIGenerateSubTopics(subject)
			const responseData = (await axios(requestOptions)).data.choices[0].message.content
			const subTopicsList = JSON.parse(responseData).subTopics
			return subTopicsList
		} catch (error) {
			throw error
		}
	}

	async generateDescription(subject: string) {
		try {
			requestOptions.data = OpenAIGenerateDescription(subject)
			const responseData = (await axios(requestOptions)).data
			const description = responseData.choices[0].message.content
			return description
		} catch (error) {
			throw error
		}
	}
}
