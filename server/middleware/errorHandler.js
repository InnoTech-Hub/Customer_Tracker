const {constants} = require('../utils');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    // ERROR RESPONSE BASED ON STATUS CODE
    // VALIDATION ERROR
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        // NOT_FOUND ERROR
        case constants.NOT_FOUND:
            res.json({title: "Not Found", 
                message: "error not found", 
                stackTrace: err.stack
            });
            break;
        // INTERNAL SERVER ERROR
        case constants.INTERNAL_SERVER_ERROR:
            res.json({title: "Internal Server Error",
                message: "An error occured on the server",//err.message,
                stackTrace: err.stack
            });
            break;
        //UNAUTHORIZED ERROR
        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized",
                message: "You are not authorized to access this resource",//err.message,
                stackTrace: err.stack
            });
            break;
        // FORBIDDEN ERROR
        case constants.FORBIDDEN:
            res.json({title: "Forbidden",
                message: "Access to this resource is forbidden",//err.message,
                stackTrace: err.stack
            });
            break;

        default:
            console.log("No error, all good!", err);

        }
    };


module.exports = {errorHandler};
