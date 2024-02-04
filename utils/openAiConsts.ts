import 'dotenv/config'


const apikey = process.env.openAiApiKey

export const OpenAIUrl = "https://api.openai.com/v1/chat/completions"
export const openAiheaders = {
	"Authorization": `Bearer ${process.env.API_KEY}`,
    "Content-Type" : "application/json"
}

export const requestOptions = {
	method: 'post',
	url: OpenAIUrl,
	data: {},
	headers: openAiheaders
} 






export const OpenAIGenerateSubjects = 
{
	"model": "gpt-4",
	"messages": [{
		"role": "user",
		"content": "give me 12 intersting, exciting and enjoyable subjects for children at the age of 10. write me just the list of the subject and not more then this. Do not use adjectives. give me the result in hebrew"
	}],
	"temperature": 0.7,
	"functions": [{
		"name": "generate_subjects",
		"parameters": {
			"type": "object",
			"properties": {
				"subjectList": {
					"type": "array",
					"items": {
						"type": "string"
					}
				}
			}
		}
	}]
}

export function OpenAIGenerateSubTopics(subject:string) {
	return {
		"model": "gpt-4",
		"messages": [
			{
				"role": "user",
				"content": `Your topic is ${subject}. Provide 3 creative subtopics related to ${subject} suitable for 8-year-old children. don't dive into details about them, just present a subtopics it self with no more info. Expected Response (Format): { subTopics : [subTopic1,subTopic2,subTopic3]}`
			}
		],
		"temperature": 0.5
	}
}


export function OpenAIGenerateDescription(subject:string) {
	return {
		"model": "gpt-4",
		"messages": [
			{
				"role": "user",
				"content": `I want to create educational process to childrens at the age of 8. my subject is: ${subject}.give me little description about whats we gonne learn in the process of 1 line (not more than 15 words). dont number the answers. write them in one connected paragraph (not more than 15 words).`
			}
		],
		"temperature": 0.7
	}
}
