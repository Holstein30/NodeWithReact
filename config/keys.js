// keys.js
// mongodb+srv://dbProd:9BvZH29S1GxZWah3@cluster0-odgmw.mongodb.net/test?retryWrites=true&w=majority

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
