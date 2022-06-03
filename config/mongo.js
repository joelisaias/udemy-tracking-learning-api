const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** Conexión a MongoDB Exitosa ****')
        } else {
            console.log('***** Error al conectar a MongoDB ****')
        }
    })
}

module.exports = { dbConnect }