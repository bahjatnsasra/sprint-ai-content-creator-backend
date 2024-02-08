import 'dotenv/config'

export const DALLEUrl = "https://api.openai.com/v1/images/generations";
export const OpenAIUrl = "https://api.openai.com/v1/chat/completions"
export const openAiheaders = {
	"Authorization": `Bearer ${process.env.API_KEY}`,
    "Content-Type" : "application/json"
}

// GPT
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
				"content": `I want to create educational process to childrens at the age of 8. my subject is: ${subject}.give me little description about whats we gonne learn in the process of 1 line (not more than 15 words). dont number the answers. write them in one connected paragraph (not more than 15 words). give the answer in hebrew!`
			}
		],
		"temperature": 0.7
	}
}

export function OpenAIGenerateImage	(subject:string) {
	return {
            "model": "dall-e-3",
                "prompt": `Make illustration of ${subject}. illustration, flat, comics style for teenagers. make width cover size.,
                "n": 1,
                "size": "1792x1024`
            }
}

export function OpenAIGenerateProgramStructure	(subject:string, contentType:boolean, learn:string) {
	return {
		"model": "gpt-4",
		"messages": [{
			"role": "user",
			"content": `You are an expert in writing learning paths in different fields for children.
			Your goal is to write a learning path that is pedagogically adapted for children at the age of 8 in Israel.
			The path is learned independently, for 5 days, each day for about an hour and a half.
			Its goal is to empower independent learning, creativity, and critical thinking.
			The course should work on the following skills: independent learning, creativity, technological literacy, and critical thinking.
			On the third day, there is a class meeting for half an hour, and on the fifth and final day, there is a class meeting for an hour.
			You need to build a template of 5 days, with each day having a title, goal (one or two sentences), and headings of the tasks on that day (3-4 tasks). 
			very important to add ${contentType} to one task per day! (remember that the children at the age of 8 so dont give then something hard). 
			(if you offer videos add link for that) On the fourth day, there is a task dedicated to preparing the learning presentation in front of the entire class. 
			Your topic is ${subject}.The path should teach students to understand ${learn} and create a product (give me ideas for types of products in the context of this project. 
			For example: list, poster, creating an image with an artificial intelligence tool, etc.).
			During the course, there is no teaching, the students need to understand concepts and acquire knowledge independently through experimentation.Each day should include practical, active work. 
			dont suggest to watch video or install some apps. 
			dont suggest to upload text files beacuse the children have a textbox. 
			Use simple words that children know. Use words that 8 year olds understand. 
			build missions that 8 years old children can do. 
			Pay attention to the instructions of the tasks.
			Emphasize that the tasks will not be similar.
			give me the answer in hebrew!`
		}],
		"temperature": 0.7
		}
}



