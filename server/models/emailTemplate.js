const mongoose = require('mongoose')

const emailTemplateSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
})

module.exports = mongoose.model('emailTemplate',emailTemplateSchema,'emailTemplate')