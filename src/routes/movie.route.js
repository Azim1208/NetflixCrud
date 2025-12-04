import { Router } from "express";
import controller from '../controllers/movie.controller.js';
import { validator } from '../middlewares/validation-handle.js';
import movieValid from '../validators/movie.validation.js';

const router = Router();

router
    .post('/', validator(movieValid.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findOne)
    .patch('/:id', validator(movieValid.update), controller.update)
    .delete('/:id', controller.remove)

export default router;