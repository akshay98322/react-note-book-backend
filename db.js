const mongose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/"

const connectToMongo = () => {
    mongose.connect(mongoURI, () => {
        console.log("Connected to MongoDB")})};

        module.exports = connectToMongo;


