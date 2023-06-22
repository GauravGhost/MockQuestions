const {ErrorResponse} = require('../utils/common')
const AppError = require('../utils/AppError')

function CreateValidation(req, res, next){
        if(!req.body.name){
            ErrorResponse.message = "Something went wrong while creating question";
            ErrorResponse.error = new AppError(["Something went wrong in name field"], 403)
            return res.status(403).json(ErrorResponse)
        }
        if(!req.body.link){
            ErrorResponse.message = "Something went wrong while creating question";
            ErrorResponse.error = new AppError(["Something went wrong in link field"], 403)
            return res.status(403).json(ErrorResponse)
        }
        if(!req.body.difficulty){
            ErrorResponse.message = "Something went wrong while creating question";
            ErrorResponse.error = new AppError(["Something went wrong in difficulty field"], 403)
            return res.status(403).json(ErrorResponse)
        }
        next();
}

module.exports = {
    CreateValidation
}