const ImageModel = require('../model/Image');


exports.get = async function (req, res, next) {
    try {

        var tag = await ImageModel.find();
        res.status(201).json({
            data: tag,
        });

    } catch (error) {
        console.log("hello ");
    }

};


exports.Image_upload = async function (req, res, next) {
    try {
        var data = {
            Image: req.files[0].path,
        };

        var tag = await ImageModel.create(data);
        res.status(201).json({
            data: tag,
            status: "Data insert",
        });

    } catch (error) {
        console.log("hello ");
    }

};
