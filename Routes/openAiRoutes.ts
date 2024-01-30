import { Router } from 'express';
import { OpenAiController } from '../Controllers/openAiController';
const openAiController = new OpenAiController()
const router = Router();


router.get('/get/subjects' , openAiController.generateSubjects)


export = router;