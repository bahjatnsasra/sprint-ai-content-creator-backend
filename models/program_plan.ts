import { Schema,  model} from 'mongoose';

const programPlanSchema  = new Schema({
    subject : String,
    description : String,
    structure : String,
    goals : String,
    extendedSubject : String,
    picture : String,
})

export const ProgramPlan = model("programPlan", programPlanSchema) 
