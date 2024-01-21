import express from 'express';
import { DataBaseManager } from './models/database_manager'
import 'dotenv/config'

const DBManager = new DataBaseManager()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))
DBManager.connectToDB()

const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});