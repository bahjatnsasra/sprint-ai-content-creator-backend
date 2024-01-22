import express from 'express';
import { DataBaseManager } from './models/database_manager'
import { ProgramPlanRepositories } from './Repositories/program_planRepo'
import 'dotenv/config'

const DBManager = new DataBaseManager()
const programPlanRepo = new ProgramPlanRepositories()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))
DBManager.connectToDB()
programPlanRepo.createProgramPlan()

const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});