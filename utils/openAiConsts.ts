export const OpenAIUrl = "https://api.openai.com/v1/chat/completions"

export const openAiheaders = {
    "Authorization" : "Bearer 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",
    "Content-Type" : "application/json"
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