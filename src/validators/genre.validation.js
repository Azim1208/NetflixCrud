import Joi from "joi";

class GenreValidator {
    create(data) {
        const genre = Joi.object({
            name: Joi.string().min(3).required()
        });
        return genre.validate(data);
    }

    update(data) {
        const genre = Joi.object({
            name: Joi.string().min(3).optional()
        });
        return genre.validate(data);
    }
}

export default new GenreValidator();