var mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    res : {
        type:String
    }
})

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;