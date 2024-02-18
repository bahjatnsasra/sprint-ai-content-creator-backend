import express from 'express';
import { Request, Response, NextFunction  } from "express";
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

app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))
DBManager.connectToDB()

// openAiService.generateProgramStructure('banana',"the advantages of banana" , "openAi")

app.use('/ProgramPlan',programPlanApi)
app.use('/WeekPlan',weekPlanApi)
app.use('/Day',dayApi)
app.use('/OpenAI',openAiApi)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});