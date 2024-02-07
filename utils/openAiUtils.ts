import  axios  from 'axios'
import { DALLEUrl, OpenAIGenerateProgramStructure, OpenAIGenerateImage, OpenAIGenerateDescription, OpenAIGenerateSubjects, OpenAIGenerateSubTopics, requestOptions} from './openAiConsts'

export class OpenAiService {

    async generateSubjects() {
        try {
			requestOptions.data = OpenAIGenerateSubjects
			const responseData = (await axios(requestOptions)).data.choices[0].message.function_call.arguments
			const subjects = (JSON.parse(responseData)).subjectList
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

	async generateImage(subject: string) {
		try {
			requestOptions.data = OpenAIGenerateImage(subject)
			requestOptions.url = DALLEUrl
			const responseData = (await axios(requestOptions)).data
			const Image = responseData.data[0].url
			return Image
		} catch (error) {
			throw error
		}
	}

	async generateProgramStructure(subject: string, learn:string , contentType:boolean) {
		try {
			requestOptions.data = OpenAIGenerateProgramStructure(subject,contentType,learn)
			const responseData = (await axios(requestOptions)).data
			const structure = responseData.choices[0].message.content
			return structure
		} catch (error) {
			throw error
		}
	}
}
