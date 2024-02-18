import  axios  from 'axios'
import { DALLEUrl,day1Prompt, OpenAIGenerateImage, OpenAIGenerateDescription, OpenAIGenerateSubjects, OpenAIGenerateSubTopics, requestOptions} from './openAiConsts'

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
			console.log(error);
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

	async generateDay1(structure: string){
		try {
			requestOptions.data = day1Prompt(structure)
			const responseData = (await axios(requestOptions)).data
			const dayData = JSON.parse(responseData.choices[0].message.function_call.arguments)
			console.log(dayData);
		} catch (error) {
			throw({msg: new Error(`can't generate Day 1`) , error: error})
		}
		
	}
	
}
