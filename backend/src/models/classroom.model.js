const mongoose = require('mongoose');

module.exports = mongoose.model('Classroom', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // building: { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Building',
    //     required: true
    // }
}), 'classrooms');