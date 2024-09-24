const User = require('../../models/user')
// const EmailTemplate = require('../../models/emailTemplate')
// const emailSender = require('../../middlewares/emailSender')
const findPersion = require('../../middlewares/findPersion')
const jwt = require('jsonwebtoken')
const {Smsir} = require('smsir-js')
const bcrypt = require('bcrypt')
const { LocalStorage } =  require ("node-localstorage")
global.localStorage = new LocalStorage('./scratch')


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, "nodejs is program language", {
        expiresIn: maxAge
    })
}

const handleErrors = (err) => {
    let errors = {email: "", password: ""}

    if(err.message === "Incorrect Email") {
        errors.email = "This Email Is Not Registered"
    }

    if(err.message === "Incorrect Password") {
        errors.password = "The Password Is Incorrect"
    }

    if(err.code === 11000) {
        errors.email = "Email Is Already Registerd"
        return errors
    }

    if(err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

module.exports.login = async (req, res, next) => {
    try {
            try {
                    const { email, password } = req.body
                    const user = await findPersion(email, password)
                    
                    const token = createToken(user._id)        
                    res.cookie('comercial', token, {
                        withCrdentials: true,
                        // httpOnly: true,
                        maxAge: 1000 * maxAge,
                    })
                    res.status(200).json({user: user._id, created: true})
                } catch (err) {
                    console.log(err)
                    const errors = handleErrors(err)
                    res.json({errors, created: false})
                }
    } catch (err) {
        next(err)
    }
}

module.exports.verifyCodeSms = async (req, res ,next) => {
    try {           
            const smsir = new 
                Smsir("d8oGRzrQn4qishTuyrREWjRLLWpF6RhmJRdBa1216CeTROk7FKzQoFh7drV4mkvh"
                , 30007732903087)
            
            const {phoneNumber} = req.body
            const code = Math.floor(100000 + Math.random() * 900000)

            // smsir.SendVerifyCode( phoneNumber, 930321,  [
            //     {
            //     "name": "code",
            //     "value": code.toString()
            //     }
            // ])
            localStorage.clear()
            localStorage.setItem('verifyCode', code)
            res.json({verifyCode: code})
        } catch (err) {
            next(err)
        }
}

module.exports.confirmVerifyCodeSms = async (req, res, next) => {
    try {
            const returnCode = localStorage.getItem('verifyCode')
            const {verifyCode} = req.body
            if(returnCode === verifyCode) {
                    localStorage.clear()
                    res.json({status: true})
                }        
    } catch (err) {
        next(err)
    }
}

module.exports.register = async (req, res, next) => {
    try {
            const { firstName, lastName, phoneNumber, email, password } = req.body

            let data = {
                firstName,
                lastName,
                phoneNumber,
                email,
                password
            }
            const salt = await bcrypt.genSalt()
            data.password = await bcrypt.hash(data.password, salt)

            const user = await User.create(data)
            
            const token = createToken(user._id)
            res.cookie('comercial', token, {
                withCrdentials: true,
                httpOnly: false,
                maxAge: 1000 * maxAge
            })

            res.status(201).json({user: user._id, created: true})

            // const userName = firstName + " " + lastName
            // const emailTemplate = await EmailTemplate.findOne({ _id: "6597725e29b6b47b2f81271f" })

            // emailSender(userName, email, emailTemplate)
            localStorage.clear()
} catch (err) {
    const errors = handleErrors(err)
    res.json({errors, created: false})
    next(err)
}
}
