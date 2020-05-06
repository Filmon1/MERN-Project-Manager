const mongoose = require("mongoose");

module.exports = db_name => {
    mongoose.connect(`mongodb://localhost/${db_name}`, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => console.log(`Succesfully connected to ${db_name}`))
    .catch(err => console.log(`oops something went wrong`, err));
}