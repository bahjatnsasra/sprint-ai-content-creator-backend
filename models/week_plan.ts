import { Schema,  model } from 'mongoose';

const weekPlanSchema  = new Schema({
    programPlan : { type: Schema.Types.ObjectId, ref: 'programPlan' },
    dayPlans : [{ type: Schema.Types.ObjectId, ref: 'day' }]
})

export const WeekPlan = model("weekPlan", weekPlanSchema) 
