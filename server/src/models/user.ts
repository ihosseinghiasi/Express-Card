import mongoose from "mongoose"
import IUser from "../interface/user.interface"

const userSchema = new mongoose.Schema ({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    phoneNumber: {type: String, require: true},
    password: {type: String, require: true},
}
)

const User = mongoose.model<IUser>('User',userSchema,'User')
export default User