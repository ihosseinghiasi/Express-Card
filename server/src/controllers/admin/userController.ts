import UserDB from "../../models/user"
class User {
  
  async getAllUsers() {
    const users = await UserDB.find()
    return users
  }
}

const user = new User()
console.log(user.getAllUsers())
