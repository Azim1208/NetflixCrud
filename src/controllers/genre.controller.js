import Genre from '../models/genre.shcema.js'
import { ApiError } from '../utils/custom-error.js';
import { successRes } from '../utils/success-response.js';
import { catchAsync } from '../middlewares/catch-async.js';
import { BaseController } from './base.controller.js';


class GenreController extends BaseController{
    create = catchAsync(async(req, res) => {
        const existGenre = await Genre.findOne({ name: req.body?.name });
        if (existGenre) {
            throw new ApiError('genre name already exists', 409);
        }
        const genre = await Genre.create(req.body);
        return successRes(res, genre, 201);
    });

    update = catchAsync(async(req, res) => {
        const id = req.params?.id;
        await this._getById(id);
        const { name } = req.body;
        if (name) {
            const existGenre = await Genre.findOne({ name });
            if (existGenre && existGenre.id != id) {
                throw new ApiError('Genre name already exists', 409);
            }
        }
        const updatedGenre = await Genre.findByIdAndUpdate(id, req.body, { new: true });
        return successRes(res, updatedGenre);
    })
}

export default new GenreController(Genre, 'movies');