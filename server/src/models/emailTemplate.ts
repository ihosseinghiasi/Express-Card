import mongoose from "mongoose"

const emailTemplateSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
})

export const emailModel =  mongoose.model('emailTemplate',emailTemplateSchema,'emailTemplate')