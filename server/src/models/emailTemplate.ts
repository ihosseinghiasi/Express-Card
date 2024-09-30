import mongoose from "mongoose"

const emailTemplateSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
})

export const emailModel =  mongoose.model('emailTemplate',emailTemplateSchema,'emailTemplate')

export const getEmails = () => { emailModel.find() }
export const getEmailById = (id: String) => { emailModel.findById({ id }) }
export const deleteEmailById = (id: string) => { emailModel.findByIdAndDelete({ _id: id }) }
export const updateEmailById = (id: string, values: Record<string, any>) => { emailModel.findByIdAndUpdate(id, values) }
export const createEmail = (values: Record<string, any>) =>
    new emailModel(values).save().then((Email) => Email.toObject())