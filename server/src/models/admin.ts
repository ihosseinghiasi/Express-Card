import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true },
    phoneNumber: {type: String, require: true},
    department: {type: String},
    isAdmin: {type: Boolean},
    isProduct: {type: Boolean},
    isCard: {type: Boolean},
    isEmail: {type: Boolean},
    isReport: {type: Boolean},
    isTicket: {type: Boolean},
    isCategory: {type: Boolean},
    isUser: {type: Boolean},
    isPayment: {type: Boolean},
})

export const adminModel = mongoose.model('Admin', adminSchema, 'Admin')

export const getAdmins = () => { adminModel.find() }
export const getAdminById = (id: String) => { adminModel.findById({ id }) }
export const deleteAdminById = (id: string) => { adminModel.findByIdAndDelete({ _id: id }) }
export const updateAdminById = (id: string, values: Record<string, any>) => { adminModel.findByIdAndUpdate(id, values) }
export const createAdmin = (values: Record<string, any>) =>
    new adminModel(values).save().then((Admin) => Admin.toObject())