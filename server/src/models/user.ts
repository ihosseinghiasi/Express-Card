import mongoose from "mongoose"

const userSchema = new mongoose.Schema ({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    phoneNumber: {type: String, require: true},
    password: {type: String, require: true},
    salt: {type: String, require: true}
})

export const userModel = mongoose.model('User',userSchema,'User')

export const getUsers = () => { userModel.find() }
export const getUserById = (id: String) => { userModel.findById({ id }) }
export const deleteUserById = (id: string) => { userModel.findByIdAndDelete({ _id: id }) }
export const updateUserById = (id: string, values: Record<string, any>) => { userModel.findByIdAndUpdate(id, values) }
export const createUser = (values: Record<string, any>) =>
    new userModel(values).save().then((user) => user.toObject())