const persianDate = require('persian-date')

persianDate.toLocale('fa');
const newDate = new persianDate().format('dddd - DD MMMM YYYY')

module.exports = newDate