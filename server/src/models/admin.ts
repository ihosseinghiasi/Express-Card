import mongoose from "mongoose"
import IAdmin from "../interface/admin.interface"

const adminSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true },
    phoneNumber: {type: String},
    department: {type: String, required: true},
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

const Admin = mongoose.model<IAdmin>('Admin', adminSchema, 'Admin')
export default Admin
