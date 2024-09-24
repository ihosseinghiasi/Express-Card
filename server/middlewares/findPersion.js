const User = require('../models/user')
const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
module.exports = async function findPersion ( email, password ) {
    const user = await User.findOne({ email }) 
    if (user) {
        const authntication = await bcrypt.compare(password, user.password)
        if (authntication) {
            return user
        }
    } else {
        const admin = await Admin.findOne({ email })
        if (admin) {
            const authentication = await bcrypt.compare(password, admin.password)
            if (authentication) {
                return admin
            }
        }
    }
}