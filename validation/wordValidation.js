const Joi = require("@hapi/joi");

const wordValidation = (data) => {
    const schema = Joi.object({
        word: Joi.string().required().min(1),
        type: Joi.string().required().min(1),
        meaning: Joi.string().required().min(1),
        example: Joi.string()
    });
    
    return schema.validate(data);
}