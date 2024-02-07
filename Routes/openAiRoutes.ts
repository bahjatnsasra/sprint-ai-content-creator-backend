import { Router } from 'express';
import { OpenAiController } from '../Controllers/openAiController';
const openAiController = new OpenAiController()
const router = Router();


router.get('/get/subjects' , openAiController.generateSubjects)
router.get('/get/subTopics/:subject' , openAiController.generateSubSubjects)
router.get('/get/description/:subject' , openAiController.generateDescription)
router.get('/get/image/:subject' , openAiController.generateImage)
router.post('/create/structure' , openAiController.generateImage)



export = router;