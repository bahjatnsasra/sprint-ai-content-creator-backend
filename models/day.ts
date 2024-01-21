import { Schema,  model} from 'mongoose';

const daySchema  = new Schema({
    title : String,
    tasks : String
})

const Day = model("day", daySchema) 
module.exports = Day