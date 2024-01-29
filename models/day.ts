import { Schema,  model} from 'mongoose';

const daySchema  = new Schema({
    title : String,
    tasks : String
})

export const Day = model("day", daySchema) 
