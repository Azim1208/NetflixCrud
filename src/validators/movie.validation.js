import Joi from "joi";



class MovieValidation{
    create(data) {
        const movie = Joi.object({
            title: Joi.string().min(1).required(),
            description: Joi.string().required(),
            language: Joi.string().isIn(['english', 'russian', 'uzbek']),
            genre: Joi.string().hex().length(24).required()
        });
        return movie.validate(data);
    }
    
    update(data) {
        const movie = Joi.object({
            title: Joi.string().min(1).required(),
            description: Joi.string().required(),
            language: Joi.string().isIn(['english', 'russian', 'uzbek']),
            genre: Joi.string().hex().length(24).required()
        })
        return movie.validate(data)
    }
}


export default new MovieValidation();