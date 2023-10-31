const mongoose = require('mongoose');
const modelSchema = new mongoose.Schema({
    Image: {
        type: String
    },
})


const UserModel = mongoose.model("Image", modelSchema);
module.exports = UserModel;
