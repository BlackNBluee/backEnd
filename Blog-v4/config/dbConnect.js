const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        // useUnfiedTopology: true
    })
    .then(() => {
        console.log("Data Base connected succefully");
    })
    .catch((error)=>{
        console.error("Error occured: "+error);
        process.exit(1);
    })
}