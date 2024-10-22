const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect= () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewurlParser: true,
        useUnifiedTopology: true
    })
    .then(() => "db Connection is successful")
    .catch((error) => {
        alert("Error while connecting"+error);
        process.exit(1);
    });
}

module.exports = dbConnect;