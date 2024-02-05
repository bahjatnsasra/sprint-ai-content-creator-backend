import express from 'express';
import { DataBaseManager } from './models/database_manager'
import { OpenAiService } from './utils/openAiUtils';
import  programPlanApi  from './Routes/program_planRoutes'
import  weekPlanApi from './Routes/week_planRoutes'
import  dayApi from './Routes/dayRouts'
import openAiApi from './Routes/openAiRoutes'
import 'dotenv/config'

const openAiService = new OpenAiService()
const DBManager = new DataBaseManager()
7
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))
DBManager.connectToDB()

openAiService.generateDescription('banana')

app.use('/ProgramPlan',programPlanApi)
app.use('/WeekPlan',weekPlanApi)
app.use('/Day',dayApi)
app.use('/OpenAI',openAiApi)

const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});