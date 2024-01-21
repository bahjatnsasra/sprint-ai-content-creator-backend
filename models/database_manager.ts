import { connect } from 'mongoose';
import 'dotenv/config'


export class DataBaseManager {
    async connectToDB() {
        try {
            await connect(process.env.DATABASE_URL!);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.log(error);
        }
    }
}