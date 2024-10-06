import mongoose from "mongoose";

export default interface IUser extends mongoose.Document {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
}
