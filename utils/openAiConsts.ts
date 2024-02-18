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
				"content": `Your topic is ${subject}. Provide 3 creative subtopics related to ${subject} suitable for 8-year-old children. give the data in hebrew! don't dive into details about them, just present a subtopics it self with no more info. Expected Response (Format): { subTopics : [subTopic1,subTopic2,subTopic3]}`
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

export function OpenAIGenerateImage(subject: string) {
    return {
        "model": "dall-e-3",
        "prompt": `Make illustration of ${subject}. illustration, flat, comics style for teenagers. make width cover size.`,
        "n": 1,
        "size": "1792x1024"
    };
}


export const day1Prompt = (programStructure : string) => {
    return  {
		"model": "gpt-4",
		"messages": [{
			"role": "user", 
			"content": `this is the program structure: ${programStructure}. let's create a plan for each day, for children at the age of 8. Comprised of 3-4 tasks: one of them must be highly creative, and the last one should possess a meta-cognitive nature.It's important that the meta-cognitive task doesn't repeat itself from day to day but rather reflects progress in the student's ability to understand their own learning and the content on the course.Each task needs to be detailed according to this structure: Title Instructions for the task The student's performance documentation method (e.g., uploading a picture/video/file, answering questions, writing text, or pasting links) Estimated duration for completion Guidelines - additions that will help the student understand the task and execute it well. Remember! the age of the childrens is 8 -  Address it in the content you write and how you write it. Use simple words that children at the age of 8 can understood. If there is a fear that a children will not succeed in the task - break down the tasks into small tasks and give more data in the directive.
			planning only Day 1: allocate 90 minutes for studying in total - it's important to make sure that all tasks for this day will amount to a total of 90 minutes and not more. bring the answer in hebrew`}],
		"temperature": 0.5,
		"functions" : [{
			"name": "create_day_plan",
			"parameters": {
				"type": "object",
				"properties": {
					"dayPlanTitle" : {"type" : "string", "description" : "day plan title "},
					"dayPlanContent" : {"type" : "string", "description" : "day plan content "},
				}
			}
		}]
	}
	
};
