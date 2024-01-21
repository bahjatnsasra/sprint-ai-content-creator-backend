import express from 'express';

import 'dotenv/config'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))


const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});