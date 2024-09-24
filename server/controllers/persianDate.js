const persianDate = require('../date/persianDate')

module.exports.persianDate = (req, res, next) => {
    return res.send(persianDate)
}