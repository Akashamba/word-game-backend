const Joi = require("@hapi/joi");

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        "full-name": Joi.string().required().min(6),
        "username": Joi.string().required().min(6),
        "password": Joi.string().required().min(6),
    })

    return schema.validate(data);
};


// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        "username": Joi.string().required().min(6),
        "password": Joi.string().required().min(6),
    })

    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation; 
